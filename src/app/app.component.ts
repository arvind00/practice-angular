import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faAngular = faAngular;
  faBars = faBars;
  title = 'angular-practice';
  isSidebarExpanded: Boolean | null = null;
  menuList = [
    { label: 'About', route: '/about', params: this.title },
    { label: 'Contact', route: '/contact', params: { mobile: 2938749230, email: 'some_email@mail.com' } },
  ];
  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  toggleSideBar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  navigateToContact() {
    this.router.navigate(['/contact', { mobile: 2938749230, email: 'some_email@mail.com' }]);
  }
}
