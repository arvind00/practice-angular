## Learning objective 
- Define an application layout with header, sidebar and main content area
- Define some navigation links in the sidebar
- Programatically navigate to a route

## Create Header and Sidebar 
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
  <fa-icon id="angular_icon" [icon]="faAngular" style="color: #da0909; font-size: 1.7em;"></fa-icon>
</nav>
<div class="c-spacer-row"></div>
<!-- end of header -->
<div class="c-sidebar bg-light list-group" [ngClass]="{'c-sidebar-expanded': isSidebarExpanded, 'c-sidebar-collapsed': isSidebarExpanded===false}">
  <a *ngFor="let m of menuList" [routerLink]="[m.route, m.params]" routerLinkActive="bg-dark" class="p-1 link-info d-block list-group-item" (click)="toggleSideBar()">{{m.label}}</a>
  <button class="btn btn-secondary" (click)="navigateToContact()">Go To Contacts</button>
</div>
<!-- end of sidebar -->
<div class="container-fluid">
  <router-outlet></router-outlet>
</div>
```
- Except the class `c-spacer-row` other classes are bootstrap css classes
- Let us prefix our custom classes with `c-` to differentiate them from bootstrap classes
- For Sidebar, a div positioned absolutely is added.
- Router links or menu items are rendered using a for loop.
- Also add the special directive `router-outlet` to render the component with the active route
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
    height: 0;
    opacity: 0;
    overflow: hidden;
    transform: rotate(90deg);
}

.c-sidebar-expanded{
    animation-name: hinge-open;
    animation-duration: 1s;
    animation-direction: initial;
    animation-fill-mode: forwards;
}

.c-sidebar-collapsed{
    animation-name: hinge-close;
    animation-duration: 1s;
    animation-direction: initial;
    animation-fill-mode: forwards;
}

@keyframes hinge-open {
    0% {width: 0; height: 0; transform: rotate(90deg); opacity: 0.2;}
    50% {width: 128px; height: 200px; transform: rotate(45deg); opacity: 5;}
    100% {width: 256px; height: 400px; transform: rotate(0deg); opacity: 1;}
}
@keyframes hinge-close {
    0% {width: 256px; height: 400px; transform: rotate(10deg);}
    50% {width: 128px; height: 200px; transform: rotate(45deg);}
    100% {width: 0; height: 0; transform: rotate(90deg); opacity: 1;}
}

.c-sidebar-expanded > a:hover {
    color: rgb(255, 255, 255);
    background-color: #40bf9c;
    border-color: #40bf9c;
}

#angular_icon {
    filter: drop-shadow(1px 2px 2px tomato);
}
```
- Notice that the sidebar width will change from 0 to 256px on apply the `c-sidebar-expanded` class
- Update `app.component.ts` as below

```ts
import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faAngular = faAngular;
  faBars = faBars;
  title = 'angular-practice';
  isSidebarExpanded: Boolean | null = null;
  menuList = [
    { label: 'About', route: '/about', params: this.title },
    { label: 'Contact', route: '/contact', params: { mobile: 2938749230, email: 'some_email@mail.com' } },
  ];
  constructor(private router: Router){}

  toggleSideBar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  navigateToContact(){
    this.router.navigate(['/contact', { mobile: 2938749230, email: 'some_email@mail.com' }]);
  }
}
```
- 
- Don't forget to install free brand icons of fontawesome
```sh
npm i -S @fortawesome/free-brands-svg-icons
```
- Check the list of fontawesome packages here
> https://fontawesome.com/v5.15/how-to-use/javascript-api/setup/importing-icons

## Quiz

### Q. Which directive is used to define routes in a link tag?
- `routerLink`

### Q. Which directive is used to display the current route component?
- `<router-outlet></router-outlet>`

### Q. Which directive is used to apply a css class to the currently active route?
- `routerLinkActive`

### Q. Which method for router is used to navigate to a route?
- `this.router.navigate(['/route_path'])`
