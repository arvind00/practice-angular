import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppStateService, eSidebarSate } from 'src/app/app-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  isSidebarExpanded: boolean = false;
  menuList = [
    { label: 'About', route: '/about', params: 'Some Param' },
    {
      label: 'Contact',
      route: '/contact',
      params: { mobile: 2938749230, email: 'some_email@mail.com' },
    },
    { label: 'Books', route: '/books', params: null },
    { label: 'Authors', route: '/authors', params: null },
  ];
  constructor(
    private appStateService: AppStateService,
    private router: Router
  ) {}

  sidebarState$!: Subscription;
  ngOnInit(): void {
    this.sidebarState$ = this.appStateService
      .getSidebarState()
      .subscribe((state) => {
        this.isSidebarExpanded = state == eSidebarSate.OPENED;
      });
  }

  navigateToContact() {
    this.router.navigate([
      '/contact',
      { mobile: 2938749230, email: 'some_email@mail.com' },
    ]);
  }

  toggleSidebar(){
    this.appStateService.toggleSidebar();
  }

  ngOnDestroy(): void {
    this.sidebarState$?.unsubscribe();
  }
}
