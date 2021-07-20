## Learning Objective
- [x] Create an http intercpetor
- [x] Show and hide spinner whenever there is an http api call

### Step 1 - Create Http Interceptor
- create a folder `src/app/common`
- create a file `http-interceptor.ts` inside it
```ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AppStateService } from '../app-state.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    constructor(private appStateService: AppStateService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.appStateService.setSpinnerState(true);

        return next.handle(req).pipe(
            finalize(()=>this.appStateService.setSpinnerState(false))
        );
    }
}
```

### Step 2 - Update root module providers

```ts
...
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
    ]
```
- import the `HTTP_INTERCEPTORS` from `@angular/common/http`

### Step 3 - Update the method in root component

```ts
  fakeDataFetch(){
    this.appDataServie.sendGetRequest<any>('assets/data/books.json').subscribe(res=>{
      console.log(res);
    });
  }
```
- calling this method should make an http get api call and it will be intercepted by our http interceptor