import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BOOK_LIST } from '../book.data';
import { iBook } from '../book.interface';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBookDetailsById(params['id']);
    })
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
    this.book = BOOK_LIST.find((b) => b.id === id)
  }
}
