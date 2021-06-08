import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookParam: { authorId: String, genre: String } = { authorId: '', genre: '' };

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

}
