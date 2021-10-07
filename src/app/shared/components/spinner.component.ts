import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/app-state.service';

@Component({
  selector: 'app-spinner',
  template: `
   <div class="spinner-container" [ngStyle]="{display: show?'flex': 'none'}">
    <mat-progress-spinner diameter="50" mode="indeterminate"></mat-progress-spinner>
   </div>
  `,
  styles: [`
    .spinner-container{
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.3);
      z-index: 90000;
    }
  `]
})
export class SpinnerComponent implements OnInit, OnDestroy {
  show = false;
  private spinnerState$!: Subscription;

  constructor(private appStateService: AppStateService) { }

  ngOnInit(): void {
    this.spinnerState$ = this.appStateService.getSpinnerState().subscribe(state => this.show = state)
  }

  ngOnDestroy(): void {
    this.spinnerState$?.unsubscribe();
  }
}
