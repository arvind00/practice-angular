import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: String | null = null;
  page: Number | null = null;
  editSection: String | null = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.page = Number(this.activatedRoute.snapshot.queryParams['page']);
    this.editSection = this.activatedRoute.snapshot.fragment;
  }

}
