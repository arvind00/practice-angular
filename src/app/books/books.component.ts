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
