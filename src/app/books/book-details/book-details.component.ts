import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { iBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: iBook | undefined = undefined;
  bookId: String | null = null;
  title: String | null = null;
  author: String | null = null;
  BOOK_LIST: iBook[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBookDetailsById(params['id']);
    })
    this.bookService.getBooks().subscribe(res=>this.BOOK_LIST = res);
  }

  editBook() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      queryParams: { page: 5},
      fragment: 'S2',
      queryParamsHandling: 'merge'
    }
    this.router.navigate(['edit'], navigationExtras);
  }

  getBookDetailsById(id: String) {
    this.book = this.BOOK_LIST.find((b) => b.id === id)
  }
}
