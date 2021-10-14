import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import Ajv from 'ajv';
import { environment } from 'src/environments/environment';

export function getShortServiceUrl(url: string) {
  if (!url) return url;
  let _url = url.startsWith('http') ? url : location.origin + url;
  let _i = _url.indexOf('//') + 2;
  _url = _url.substring(_i);
  _i = _url.indexOf('/');
  return _url.substring(_i);
}

export function handleError(e: HttpErrorResponse | string) {
  let _errMsg = '';
  if (typeof e == 'string') {
    _errMsg = e;
  } else if (e instanceof Error) {
    _errMsg = e.message;
  } else if (
    e.error &&
    typeof e.error == 'object' &&
    e.error.hasOwnProperty('errMessage') &&
    e.error.errMessage.length > 0
  ) {
    _errMsg = e.error.errMessage;
  } else {
    let _serviceUrl = getShortServiceUrl(e.url || '');
    _errMsg = `Service: ${_serviceUrl} is failing.`;
  }
  return throwError(new Error(_errMsg));
}

export function validateSchema(
  respJsonList: any[],
  schemaList: any[],
  schemaTitleList: any[]
) {
  let validator = new Ajv();
  let compliant: PromiseLike<any> | boolean = false;
  respJsonList.forEach(function (jsonData: any, i: number): void | boolean {
    compliant = validator.validate(schemaList[i], jsonData);
    if (!compliant) {
      if (schemaTitleList)
        console.log(`schema not compliant in ${schemaTitleList[i]}`);
      return false;
    }
  });
  if (!compliant) {
    console.error(validator.errors);
  }
  return compliant;
}

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private api = environment.api;
  constructor(private http: HttpClient) {}

  sendGetRequest<T>(url: string, RES_SCHEMA?: string): Observable<T> {
    url = url.startsWith('/assets/') ? url : this.api + url;
    if (!RES_SCHEMA) {
      return this.http.get<T>(url).pipe(catchError(handleError));
    }
    return this.http.get<T>(url).pipe(
      catchError(handleError),
      tap((r) => {
        if (!validateSchema([r], [RES_SCHEMA], [getShortServiceUrl(url)])) {
          let _msg = `Response format incompatible in ${getShortServiceUrl(
            url
          )}`;
          throw new Error(_msg);
        }
      })
    );
  }

  sendPostRequest<T>(
    url: string,
    reqBody: any,
    RES_SCHEMA?: string
  ): Observable<T> {
    url = url.startsWith('/assets/') ? url : this.api + url;
    if (!RES_SCHEMA) {
      return this.http.post<T>(url, reqBody).pipe(catchError(handleError));
    }
    return this.http.post<T>(url, reqBody).pipe(
      catchError(handleError),
      tap((r) => {
        if (!validateSchema([r], [RES_SCHEMA], [getShortServiceUrl(url)])) {
          let _msg = `Response format incompatible in ${getShortServiceUrl(
            url
          )}`;
          throw new Error(_msg);
        }
      })
    );
  }
}
