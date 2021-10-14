## Learning Objective
- [ ] Pass query params
- [ ] Pass fragment
- [ ] Retrieve the query params
- [ ] Retrieve the fragment

## Implementation
- Let's suppose we want to edit a book(identified by bookId), a particular page, a particular section
- Let the url look like `/books/b1005/edit?page=5#S2`
- Here we have bookId=`b1005` as param, `page`=5 as query param and `S2` as fragment 

## Create EditBookComponent
```sh
ng g c books/edit-book --skip-tests=true
```

## Pass params, query params and fragment
- In `book.component.html` add the below link
```html
<a [routerLink]="['/books', 'b1005', 'edit']" [queryParams]="{page:3, by: 'admin'}" fragment="S5_P2">Edit a Book /books/id/edit</a>
```

## Retrieve params, query params and fragment
- Update `edit-book.component.ts` as
```ts
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
```
- If there is a need to navigate from edit book component to itself with a different params/query params/ fragment subscribe to thier corresponding obeservables

## Display the params received
```html
<!-- edit-book.component.html -->
<p>edit-book with id: {{bookId}} on page: {{page}} and section: {{editSection}}</p>
```