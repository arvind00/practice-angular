## Learning Objective
- Learn to protect a route and child routes with CanActivate router guard

## Scenario Briefing
- Let us fake a login service
- Guard the `/books` and it's child routes based on whether the user is logged in or not

## Step 1 - Generate a router guard that implements CanActivate

```sh
λ ng g guard auth
? Which interfaces would you like to implement? CanActivate
CREATE src/app/auth.guard.spec.ts (331 bytes)
CREATE src/app/auth.guard.ts (457 bytes)
```

## Step 2 - Create Authentication Service

```sh
ng g s auth
```

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return this.loggedIn;
      }, 500);
    });
    return promise;
  }
}

```

## Step 3 - Include both the services in the providers array of root module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { PRIME_MODULES, PRIME_PROVIDERS } from './prime';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BooksComponent,
    EditBookComponent,
    BookDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SharedModule,
    PRIME_MODULES
  ],
  providers: [
    PRIME_PROVIDERS,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


## Step 4 - Update auth.guard.ts

```ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

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

}

```
