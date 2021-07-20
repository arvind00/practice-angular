import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AppStateService } from './app-state.service';
import { AppDataService } from './app-data.service';

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
    private primengConfig: PrimeNGConfig,
    private appStateService: AppStateService,
    private appDataServie: AppDataService
  ) { }

  showSpinner = false;
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.appStateService.getSpinnerState().subscribe(spinnerState=>{ this.showSpinner = spinnerState });
  }

  toggleSideBar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  navigateToContact() {
    this.router.navigate(['/contact', { mobile: 2938749230, email: 'some_email@mail.com' }]);
  }

  fakeDataFetch(){
    this.appDataServie.sendGetRequest<any>('assets/data/books.json').subscribe(res=>{
      console.log(res);
    });
  }
}
