## Learning Objective
- Learn to protect just the child routes with `CanActivateChild`

## Scenario Briefing
- Let's create the below components for managing book authors
    - page to display list of authors: `authors.component.ts` | route path: `/authors`
    - child routes of authors
        - page to view details of an author: `author-detail.component.ts` | route path: `/authors/:id`
        - page to edit an author's details: `edit-author.component.ts` | route path: `authors/:id/edit`
- Protect the child routes if user is not logged in

## Step 1 - Generate components

```sh
λ ng g c authors --skip-tests=true
CREATE src/app/authors/authors.component.html (22 bytes)
CREATE src/app/authors/authors.component.ts (279 bytes)
CREATE src/app/authors/authors.component.css (0 bytes)
UPDATE src/app/app.module.ts (1684 bytes)

λ ng g c authors/author-detail --skip-tests=true
CREATE src/app/authors/author-detail/author-detail.component.html (28 bytes)
CREATE src/app/authors/author-detail/author-detail.component.ts (302 bytes)
CREATE src/app/authors/author-detail/author-detail.component.css (0 bytes)
UPDATE src/app/app.module.ts (1800 bytes)

λ ng g c authors/edit-author --skip-tests=true
CREATE src/app/authors/edit-author/edit-author.component.html (26 bytes)
CREATE src/app/authors/edit-author/edit-author.component.ts (294 bytes)
CREATE src/app/authors/edit-author/edit-author.component.css (0 bytes)
UPDATE src/app/app.module.ts (1908 bytes)
```

## Step 2 - Update existing auth guard to implement CanActivateChild interface

```ts
// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return authenticated
        } else {
          this.router.navigate(['/login']);
        };
        return false;
      })
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(route, state);
  }

}
```

## Step 3 - Update the routing module

```ts
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from "./books/books.component";
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about/:title', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'books', component: BooksComponent, canActivate: [AuthGuard], children: [
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: EditBookComponent },
    ]
  },
  {
    path: 'authors', component: AuthorsComponent, canActivateChild: [AuthGuard], children: [
      { path: ':id', component: AuthorDetailComponent },
      { path: ':id/edit', component: EditAuthorComponent },
    ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```