import { Component } from '@angular/core';
import { faAmbulance, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faAmbulance = faAmbulance;
  faBars = faBars;
  title = 'angular-practice';
}
