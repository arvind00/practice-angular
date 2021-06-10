## Learning Objective
- Learn to setup up children routes 
- So that the parent component can display child components within itself
- Learn Relative routing
- Learn to preserve or merge the queryparams

## Scenario Briefing
- Let's there be a books component
- By default, let it list all the existing list of books (/books)
- Click on a book should display a book next to list of books (/books/:id?publisherId=pb1001)
    - This should load the book-details component
    - book-details component again will have an edit button 
    - Clicking on it should trigger the route: /books/:id/edit?publisherId=pb1001 
    - Here use relative route navigation and also preseve the query params

## Step 1 - Define child routes
```ts
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from "./books/books.component";
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about/:title', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'books', component: BooksComponent, children: [
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: EditBookComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

## Step 2 - Define router-outlet to load child component
```html
// src/app/books/books.component.html
<h4>Books</h4>
<div class="row">
    <div class="col-md-4 list-group">
        <div *ngFor="let b of bookList" class="list-group-item" (click)="viewBookDetails(b)">{{b.title}} By {{b.author}}</div>
    </div>
    <div class="col-md-8">
        <router-outlet></router-outlet>
    </div>
</div>
```

## Step 3

```ts
// src/app/books/books.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BOOK_LIST } from './book.data';
import { iBook } from './book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: iBook[] = BOOK_LIST;
  constructor(private router: Router) { }

  ngOnInit(): void {}

  viewBookDetails(b:iBook){
    this.router.navigate(['/books', b.id], {queryParams:{ publisherId: b.publisherId}});
  }

}

```