import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocDragComponent } from '../poc-drag';

const ROUTES: Routes = [
  {path: '', component: PocDragComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.root(ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

## Project reference
- D:\Arvind\Learn workspace\angular-poc