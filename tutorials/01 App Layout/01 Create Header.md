## Learning Objective
- [x] Create a simple component that will act as application header

## Implementation Strategy
- [x] Let's create a re-usable component in the shared module.
- [x] Then we will include it in the template of root component.
- [x] Let it have a hamberger icon to toggle the sidebar
- [x] From this component we will just call a service to toggle the sidebar
- [x] So we will create a service and put a subject to emit sidebar state

## Step 1 - Create or update service to communicate sidebar state
- update `src/app/app-state.service.ts` as
```ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum eSidebarSate {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED',
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  spinnerState: Subject<boolean> = new Subject();
  sidebarState: Subject<eSidebarSate> = new Subject();
  currentSidebarState = eSidebarSate.CLOSED;

  constructor() {}

  getSpinnerState() {
    return this.spinnerState.asObservable();
  }

  setSpinnerState(state: boolean) {
    this.spinnerState.next(state);
  }

  getSidebarState() {
    return this.sidebarState.asObservable();
  }

  toggleSidebar() {
    this.currentSidebarState == eSidebarSate.OPENED
      ? this.setSidebarState(eSidebarSate.CLOSED)
      : this.setSidebarState(eSidebarSate.OPENED);
  }

  setSidebarState(state: eSidebarSate) {
    this.currentSidebarState = state;
    this.sidebarState.next(state);
  }
}
```

## Step 2 - Generate Header Component
- cd into the shared module folder and type `ng g c header --module shared`
- update it's template as
```html
<nav class="bg-light fixed-top d-flex align-items-center">
  <button
    data-test-id="menu-toggler"
    class="btn btn-text"
    (click)="toggleSideBar()"
  >
    <fa-icon [icon]="faBars" class="text-info"></fa-icon>
  </button>
  <a class="navbar-brand mx-1" href="#">Practice Angular</a>
  <fa-icon
    id="angular_icon"
    [icon]="faAngular"
    style="color: #da0909; font-size: 1.7em"
  ></fa-icon>
</nav>
<div class="c-spacer-row"></div>
```
- update its scss as
```scss
.c-spacer-row{
    height: 40px;
}

#angular_icon {
    filter: drop-shadow(1px 2px 2px tomato);
}
```
- update its class as
```ts
import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppStateService } from 'src/app/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faAngular = faAngular;
  faBars = faBars;

  constructor(private appStateService: AppStateService) {}

  ngOnInit(): void {}
  toggleSideBar() {
    this.appStateService.toggleSidebar();
  }
}
```