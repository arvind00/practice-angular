
## Learning objective 
- Pass single and multiple values to the routes
- Parse the route params recieved in the component

## Pass params
- Let's pass the `title` member variable from `app.component.ts` to `about.component.ts`
- And pass an object as param to the `contact.component.ts`
- In the html template define the route link as
```html
<a *ngFor="let m of menuList" [routerLink]="[m.route, m.param]" class="p-1 link-info d-block" (click)="toggleSideBar()">{{m.label}}</a>
```
## Programatically navigate to a route
- First inject `Router` from `@angular/router` to your component
- Then in a method call the `navigate()` as
```ts
this.router.navigate(['/about', this.title]);
```

- Update `app.component.ts` as below
```ts
import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faAngular = faAngular;
  faBars = faBars;
  title = 'angular-practice';
  isSidebarExpanded: Boolean = false;
  menuList = [
    { label: 'About', route: '/about', params: this.title },
    { label: 'Contact', route: '/contact', params: { mobile: 2938749230, email: 'some_email@mail.com' } } 
  ];

  toggleSideBar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}

```
- Update `app-routing.module.ts` as below
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about' },
  { path: 'about/:title', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
- Notice that the `About` component route is updated as 'about/:title'
- But there is no change for the `Contact` component with recives an object as param

## Read the route params
- Let's read the `title` route param in `About` component
- Inject `ActivatedRoute` from `@angular/router`
```ts
constructor(private route: ActivatedRoute){}
```
### 1st Method to read route params
```ts
this.route.snapshot.paramMap.get('title');
```
- this method has a drawback:
  - navigating from same component with a different param won't work
  - so apply the 2nd Method to read route params
- Also check out `route.param.get()`

### 2nd Method to read route params
```ts
private paramMap$: any;

ngOnInit(){
  this.paramMap$ = this.routes.paramMap.subscribe((params)=>{
    let title = params.get('title');
  })
}
```

## Pass Params separated by /
- Suppose we have a route in the format: `/books/author_id/genre`
- Example: `/books/au1001/science-fiction` should show all the books of author id: `au1001` in the `science-fiction` genre
- Generate a component: books `ng g c books --skip-tests=true`
- add `{ path: 'books/:authorId/:genre', component: BookComponent}` in the routes
- In the books component read the params passed as
```ts
  bookParam: { authorId: String, genre: String } = { authorId: '', genre: '' };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookParam = {
      authorId: this.activatedRoute.snapshot.params['authorId'],
      genre: this.activatedRoute.snapshot.params['genre']
    }
  }
```
- display in the html template as
```html
<div>Books from Author Id: {{bookParam.authorId}} for genre: {{bookParam.genre}}</div>
```
- hit the browser url like: `http://localhost:4200/books/a1002/science-fiction`
- or add one menu entry in the sidebar as
```html
<a class="p-1 link-info d-block list-group-item" [routerLink]="['/books', 'a1002', 'fantasy']" routerLinkActive="bg-dark">Load Fantacy Books</a>
```