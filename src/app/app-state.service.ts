import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum eSidebarSate {
  OPENED = 'OPENED',
  CLOSED = 'CLOSED',
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  spinnerState: Subject<boolean> = new Subject();
  sidebarState: Subject<eSidebarSate> = new Subject();
  currentSidebarState = eSidebarSate.CLOSED;

  constructor() {}

  getSpinnerState() {
    return this.spinnerState.asObservable();
  }

  setSpinnerState(state: boolean) {
    this.spinnerState.next(state);
  }

  getSidebarState() {
    return this.sidebarState.asObservable();
  }

  toggleSidebar() {
    this.currentSidebarState == eSidebarSate.OPENED
      ? this.setSidebarState(eSidebarSate.CLOSED)
      : this.setSidebarState(eSidebarSate.OPENED);
  }

  setSidebarState(state: eSidebarSate) {
    this.currentSidebarState = state;
    console.log('current sibar state: ' + state);
    this.sidebarState.next(state);
  }
}
