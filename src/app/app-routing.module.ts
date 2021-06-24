import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from "./books/books.component";
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
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
      { path: ':id/edit', component: EditAuthorComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent, data: {info: 'The requested Page is not found.'} },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
