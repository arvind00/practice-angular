import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

import { AppStateService } from '../app-state.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private appStateService: AppStateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let _ignoreSpinner = req.params.get('ignoreSpinner');
    if (!_ignoreSpinner) this.appStateService.setSpinnerState(true);

    return next.handle(req).pipe(
      delay(2),
      finalize(() => this.appStateService.setSpinnerState(false))
    );
  }
}
