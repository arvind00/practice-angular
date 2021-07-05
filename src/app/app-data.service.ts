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
