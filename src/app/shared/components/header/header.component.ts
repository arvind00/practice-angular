import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppStateService } from 'src/app/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faAngular = faAngular;
  faBars = faBars;

  constructor(private appStateService: AppStateService, ) {}

  ngOnInit(): void {}
  toggleSideBar() {
    this.appStateService.toggleSidebar();
  }
}
