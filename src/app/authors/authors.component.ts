import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BOOK_LIST } from '../books/book.data';
import { iBook } from '../books/book.interface';
import { iAuthor } from './author';
import { AUTHOR_LIST } from './authors.data';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorList = [...AUTHOR_LIST];
  bookList = BOOK_LIST;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {}

  viewAuthorDetails(author: iAuthor) {
    this.router.navigate([author.id], { relativeTo: this.activatedRoute, queryParams: author });
  }

}
