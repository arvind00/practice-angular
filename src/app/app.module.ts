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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BooksComponent,
    EditBookComponent,
    BookDetailsComponent,
    HomeComponent
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
    PRIME_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
