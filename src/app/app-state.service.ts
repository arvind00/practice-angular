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