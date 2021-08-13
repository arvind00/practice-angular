## Learning Objective
- [x] Handle http errors 
- [x] Validate the response schema using Ajv JSON schema validator

### Step 1 - Install Ajv
- No need to install as it is already part of angular

### Step 2 - Install the vs code extension: Typescript JSON schema generator by Marco Q
- Go to the vs extension section by pressing Ctrl + Shift + x
- Enter "Typescript JSON schema generator" in the search bar
- Install it
- This extension is used to convert typescript types such as interface to json schema
- Open a file containing interfaces and press Ctrl + Shift + P and type "Generate JSON schema for type..."

### Step 3 - Define a service class to make http request, handle error and validate response json schema

```ts
// src/app/app-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Ajv from 'ajv';

export function getShortServiceUrl(url: string) {
  if (!url) return url;
  let _url = (url.startsWith('http')) ? url : location.origin + url;
  let _i = _url.indexOf('//') + 2;
  _url = _url.substring(_i);
  _i = _url.indexOf('/');
  return _url.substring(_i);
}

export function handleError(e: HttpErrorResponse | string) {
  let _errMsg = '';
  if (typeof (e) == 'string') {
    _errMsg = e;
  } else if (e instanceof Error) {
    _errMsg = e.message;
  } else if (e.error && typeof e.error == 'object' && e.error.hasOwnProperty('errMessage') && e.error.errMessage.length > 0) {
    _errMsg = e.error.errMessage;
  } else {
    let _serviceUrl = getShortServiceUrl(e.url || '');
    _errMsg = `Service: ${_serviceUrl} is failing.`;
  }
  return throwError(new Error(_errMsg));
}

export function validateSchema(respJsonList: any[], schemaList: any[], schemaTitleList: any[]) {
  let validator = new Ajv();
  let compliant: PromiseLike<any> | boolean = false;
  respJsonList.forEach(function (jsonData: any, i: number): void | boolean {
    compliant = validator.validate(schemaList[i], jsonData);
    if (!compliant) {
      if (schemaTitleList) console.log(`schema not compliant in ${schemaTitleList[i]}`);
      return false;
    }
  });
  if (!compliant) {
    console.error(validator.errors);
  }
  return compliant;
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(
    private http: HttpClient
  ) { }

  sendGetRequest<T>(url: string, RES_SCHEMA?: string): Observable<T> {
    if (!RES_SCHEMA) {
      return this.http.get<T>(url).pipe(catchError(handleError));
    }
    return this.http.get<T>(url).pipe(
      catchError(handleError),
      tap(r => {
        if (!validateSchema([r], [RES_SCHEMA], [getShortServiceUrl(url)])) {
          let _msg = `Response format incompatible in ${getShortServiceUrl(url)}`;
          throw new Error(_msg);
        }
      })
    );
  }

  sendPostRequest<T>(url: string, reqBody: any, RES_SCHEMA?: string): Observable<T> {
    if (!RES_SCHEMA) {
      return this.http.post<T>(url, reqBody).pipe(catchError(handleError));
    }
    return this.http.post<T>(url, reqBody).pipe(
      catchError(handleError),
      tap(r => {
        if (!validateSchema([r], [RES_SCHEMA], [getShortServiceUrl(url)])) {
          let _msg = `Response format incompatible in ${getShortServiceUrl(url)}`;
          throw new Error(_msg);
        }
      })
    )
  }
}
```
- In the above code 3 rxjs operators have been used.
- `catchError` operator call the error handler function only when an error occurs in the input observable
- `throwError` operator which is used in error handling function creates an observable that errors out immediately
- `tap` operator 
- if you want to re-try a failed http request check out: https://blog.angular-university.io/rxjs-error-handling/
- 

## Reference
> https://ajv.js.org/guide/getting-started.html
> https://blog.angular-university.io/rxjs-error-handling/
