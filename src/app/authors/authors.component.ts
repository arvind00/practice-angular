import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../books/book.service';
import { iBook } from '../books/book.interface';
import { iAuthor } from './author';
import { AUTHOR_LIST } from './authors.data';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorList:iAuthor[] = [];
  bookList: iBook[] = [];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private appDataService: AppDataService
  ) { }

  ngOnInit(): void {
    this.appDataService.sendGetRequest<iAuthor[]>('assets/data/authors.json').subscribe(authors =>{
      this.authorList = authors;
    }, err => console.log(err.message));
    this.bookService.getBooks().subscribe(res=>this.bookList = res);
  }

  viewAuthorDetails(author: iAuthor) {
    this.router.navigate([author.id], { relativeTo: this.activatedRoute, queryParams: author });
  }

}
