import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookParam: { authorId: String, genre: String } = { authorId: '', genre: '' };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookParam = {
      authorId: this.activatedRoute.snapshot.params['authorId'],
      genre: this.activatedRoute.snapshot.params['genre']
    }
  }

}
