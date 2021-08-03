## Learning Objective
- [x] Create a service class to make http api calls


## Briefing
- Main intention is to create a service class which will have some methods to make http request
- These methods will be generic and later schema validation and error handling will be added.
- So that there is only a single place for validations and error handling for http response.
- In this tuto, however, only the generic methods will be defined.

## Module to import
- in app.module.ts import
```ts
import { HttpClientModule } from '@angular/common/http';

...

imports: [ HttpClientModule ]
```

## Step 1 - Create a service class
- [x] create a service class named: `app-data.service.ts`
- [x] inject `HttpClient` service

```ts
import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(
    private http: HttpClient
  ) { }

  sendGetRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  sendPostRequest<T>(url: string, reqBody: any): Observable<T> {
    return this.http.post<T>(url, reqBody);
  }
}
```
- Here <T> is the generic type passed. It is the schema for the http response.

## Step 2 - Create a component and use this service

```ts
// app/sample/sample.component.ts
import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(
    private appDataService: AppDataService
  ) { }

  ngOnInit(): void {
  }

  data: {} = {};
  fetchSampleJson() {
    this.appDataService.sendGetRequest<iRes>('assets/data/sample.json').subscribe(res => {
      this.data = res;
    }, err => console.log(err));
  }

}

export interface iRes {
  [prop: string]: any
}
```
- In the above code, an api request is made that will return a json object containing key value pairs.

```html
<button class="btn btn-primary" (click)="fetchSampleJson()">Fetch Sample JSON</button>
<div>{{data | json }}</div>
```