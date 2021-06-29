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
