## Learning Objective
- [x] create a service class to set spinner state
- [x] create a spinner component

## Design Plan
- Let's create a spinner component
- In its template let's use mat spinner from angular material
- This will be a full screen spinner with spinner rotating in the center of the screen.
- We will put this spinner component's tag in the template fo the root component
- This spinner component will subscribe to a spinner state and based on the state, it will be shown or hidden

## Step 1 - Create a service class that can udpate spinner state

```ts
// app-state.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {

    spinnerState: Subject<boolean> = new Subject();

    constructor() { }

    getSpinnerState() {
        return this.spinnerState.asObservable();
    }

    setSpinnerState(state: boolean) {
        this.spinnerState.next(state);
    }
}
```

## Step 2 - Generate a spinner component that listens to the spinnerState Observable
- [x] generate a component named `spinner` by typing: 
- `ng g c shared/components/spinner --skip-tests --inline-template --inline-style --flat --module shared`
- [x] update its class logic as
```ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/app-state.service';

@Component({
  selector: 'app-spinner',
  template: `
   <div class="spinner-container" [ngStyle]="{display: show?'flex': 'none'}">
    <mat-progress-spinner diameter="50" mode="indeterminate"></mat-progress-spinner>
   </div>
  `,
  styles: [`
    .spinner-container{
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.3);
      z-index: 90000;
    }
  `]
})
export class SpinnerComponent implements OnInit, OnDestroy {
  show = false;
  private spinnerState$!: Subscription;

  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {
    this.spinnerState$ = this.appStateService.getSpinnerState().subscribe(state => this.show = state)
  }

  ngOnDestroy(): void {
    this.spinnerState$?.unsubscribe();
  }
}
```
- make sure `MatProgressSpinnerModule` is available in shared module 

## Step 2 - Use it in the root component
```html
<app-spinner></app-spinner>
```

```ts
// app.component.ts
fakeDataFetch(){
    this.appStateService.setSpinnerState(true);
    setTimeout(()=>this.appStateService.setSpinnerState(false), 2000);
}
```
- In the next tutorial we will use http interceptor to update the spinner state with every api request

## Reference
> https://material.angular.io/components/progress-spinner/overview
