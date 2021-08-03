## Learning Objective
- [x] create a service class to set and udpate spinner state

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

## Step 2 - Use it in the root component
```html
<div *ngIf="showSpinner" class="spinner">Loading...</div>
<button class="btn-info" (click)="fakeDataFetch()">fakeDataFetch</button>
```

```ts
// app.component.ts
fakeDataFetch(){
    this.appStateService.setSpinnerState(true);
    setTimeout(()=>this.appStateService.setSpinnerState(false), 2000);
}
```