## Learning Objective
- Learn to handle page not found error scenario - 404

## Step 1 - Create a component to display the 404 page
```sh
ng g c page-not-found --skip-tests=true
```

```html
<!-- src/app/page-not-found/page-not-found.component.html -->
<div class="d-flex justify-content-center align-items-center" style="height: 90vh;">
  <div style="font-size: xx-large">
    <span class="text-danger">404</span>
    <span>&nbsp;Page Not Found.</span>
  </div>
</div>
```

## Step 2 - Add route to handle 404

```ts
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from "./books/books.component";
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about/:title', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'books', component: BooksComponent, children: [
      { path: ':id', component: BookDetailsComponent },
      { path: ':id/edit', component: EditBookComponent },
    ]
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
- Make sure the wild card route is the last entry in the routes array