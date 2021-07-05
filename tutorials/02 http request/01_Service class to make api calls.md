## Learning Objective
- [x] Create a service class to make http api calls


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

```html
<button class="btn btn-primary" (click)="fetchSampleJson()">Fetch Sample JSON</button>
<div>{{data | json }}</div>
```