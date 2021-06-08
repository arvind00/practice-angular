import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BOOK_LIST } from './book.data';
import { iBook } from './book.interface';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookParam: { authorId: String, genre: String } = { authorId: '', genre: '' };
  bookList: iBook[] = BOOK_LIST;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookParam = {
        authorId: params['authorId'],
        genre: params['genre']
      }
    })
  }

  editHistoryBook() {
    this.router.navigate(['/books/edit', { queryParams: { authorId: 'a1008', genre: 'history' }, fragments: 'frag' }]);
  }

  viewBookDetails(b:iBook){
    // to load book details component 
    this.router.navigate(['/books', b.id]);
  }

}
