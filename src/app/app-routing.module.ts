import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from "./books/books.component";
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about' },
  { path: 'about/:title', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'books', component: BooksComponent, children: [
    { path: ':id', component: BookDetailsComponent },
  ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
