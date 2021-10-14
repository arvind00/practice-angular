import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularMenuComponent } from './components/circular-menu/circular-menu.component';
import { SpinnerComponent } from './components/spinner.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CircularMenuComponent,
    SpinnerComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    CircularMenuComponent,
    SpinnerComponent,
    MaterialModule,
    FontAwesomeModule,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
