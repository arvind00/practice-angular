import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { BooksResolver } from './books/books.resolver';
import { SampleComponent } from './sample/sample.component';
import { CustomHttpInterceptor } from './common/http-interceptor';
import { TemplatePocComponent } from './template-poc/template-poc.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers/app.reducer';

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
    LoginComponent,
    AuthorsComponent,
    AuthorDetailComponent,
    EditAuthorComponent,
    SampleComponent,
    TemplatePocComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    PRIME_MODULES,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [
    PRIME_PROVIDERS,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    BooksResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
