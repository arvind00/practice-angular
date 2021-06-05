import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faAngular = faAngular;
  faBars = faBars;
  title = 'angular-practice';
  isSidebarExpanded: Boolean = false;
  menuList = [
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];

  toggleSideBar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
