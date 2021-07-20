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