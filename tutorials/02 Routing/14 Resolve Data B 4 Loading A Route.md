## Learning Objective
- [x] Learn to fetch some data before a route is loaded.
- [x] This way you learn how to use `resolve` guard

## Scenario Briefing
- Let us prefetch the list of books when a book route is loaded


## Step 1 - Create a resolver service class that implements the resolve interface
```ts
// src/app/books/books.resolver.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { iBook } from './book.interface';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BooksResolver implements Resolve<iBook[]> {

  constructor(private bookService: BookService){ }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<iBook[]> | Promise<iBook[]> | iBook[] {
    return this.bookService.getBooks();
  }
}
```
- Don't forget to add in `providers` array of `app.module.ts`

## Step 2 - Create a service to fetch books data
```ts
// src/app/books/book.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { iBook } from './book.interface';

export const BOOK_API = {
    getBooks_URL: '/assets/data/books.json'
}

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http: HttpClient){}

    getBooks(){
        return this.http.get<iBook[]>(BOOK_API.getBooks_URL);
    }
}
```

## Step 3 - udpate the route definition as

```ts
{
    path: 'books', component: BooksComponent, resolve: {bookList: BooksResolver}, canActivate: [AuthGuard], children: [
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: EditBookComponent },
    ]
}
```

## Step - 4 retrieve the resolved data in the component just like static data
```ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { iBook } from './book.interface';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: iBook[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,  
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data)=>{
      this.bookList = data['bookList'];
    })
  }

  viewBookDetails(b:iBook){
    this.router.navigate(['/books', b.id], {queryParams:{ publisherId: b.publisherId}});
  }

}

```