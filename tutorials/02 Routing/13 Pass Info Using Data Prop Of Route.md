## Learning Objective
- [x] In the `page not found` route pass some static info using the `data` property of the route

## Step 1 - Update the app-routing.module.ts
```ts
{ path: 'page-not-found', component: PageNotFoundComponent, data: {info: 'The Requested Page is not found.'} },
```

## Step 2 - Retrived the data in the component
- [x] Inject activated route service and access the data prop just like the params and query params

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  info: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.info = this.activatedRoute.snapshot.data['info'];
  }

}
```

```html
<div class="d-flex justify-content-center align-items-center" style="height: 90vh;">
  <div style="font-size: xx-large">
    <span class="text-danger">404</span>
    <span>&nbsp;Page Not Found.</span>
    <p>{{info}}</p>
  </div>
</div>
```