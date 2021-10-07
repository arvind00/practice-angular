import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularMenuComponent } from './components/circular-menu/circular-menu.component';
import { SpinnerComponent } from './components/spinner.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    CircularMenuComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CircularMenuComponent,
    SpinnerComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
