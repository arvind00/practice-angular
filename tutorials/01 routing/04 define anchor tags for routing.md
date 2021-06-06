## Learning objective 
- Define an application layout with header, sidebar and main content area
- Define some navigation links in the sidebar

## Create Header 
- Let's make it very simple, for the header let there be
    - a toggler icon(fa-bars) and 
    - a brand name: `Practice Angular`
- Let's restrict to using only utility classes of bootstrap to avoid extra markups.
- The anchor tags will be kept in the sidebar.
- The plan is to toggle the sidebar by clicking the toggler icon.

```html
<!-- app.component.html -->
<nav class="bg-light fixed-top d-flex align-items-center">
  <button data-test-id="menu-toggler" class="btn btn-text" (click)="toggleSideBar()">
    <fa-icon [icon]="faBars" class="text-info"></fa-icon>
  </button>
  <a class="navbar-brand mx-1" href="#">Practice Angular</a>
  <fa-icon [icon]="faAngular" style="color: #da0909; font-size: 1.7em;"></fa-icon>
</nav>
<div class="c-spacer-row"></div>
```
- Except the class `c-spacer-row` other classes are bootstrap css classes
- Let us prefix our custom classes with `c-` to differentiate them from bootstrap classes

```css
.c-spacer-row{
    height: 40px;
}
```

## Create Sidebar
- Let's create a div and position it absolutely
- Render the menu items using a for loop
- Also add the special directive `router-outlet` to render the component with the active route

```html
<!-- app.component.html -->
...
<div class="c-sidebar bg-light rounded-end" [ngClass]="{'c-sidebar-expanded': isSidebarExpanded}">
  <a *ngFor="let m of menuList" [routerLink]="m.route" class="p-1 link-info d-block" (click)="toggleSideBar()">{{m.label}}</a>
</div>
<router-outlet></router-outlet>
```
- Note that we don't use href but `routerLink` property to define the route path
- Also note the route string start with `/`. See `app.component.ts>menuList` below. 
- Another point to note is `c-sidebar-expanded` class is added conditionally based on the flag `isSidebarExpanded`
- The boolean variable `isSidebarExpanded` is toggled via the method `toggleSideBar()`
- Update the css as  below

```css
/* app.component.css */
.c-spacer-row{
    height: 40px;
}

.c-sidebar{
    position:absolute;
    top: 40px;
    width: 0;
    overflow: hidden;
    transition: width 0.3s;
}

.c-sidebar-expanded{
    width: 256px;
}
```
- Notice that the sidebar width will change from 0 to 256px on apply the `c-sidebar-expanded` class
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
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  toggleSideBar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
```
- Don't forget to install free brand icons of fontawesome
```sh
npm i -S @fortawesome/free-brands-svg-icons
```
- Check the list of fontawesome packages here
> https://fontawesome.com/v5.15/how-to-use/javascript-api/setup/importing-icons
