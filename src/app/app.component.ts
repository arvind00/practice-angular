import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { AppDataService } from './app-data.service';
import { AppStateService } from './app-state.service';
import {
  iCircularMenuOption,
  iCircularMenuWing
} from './shared/components/circular-menu/circular-menu.component';
import { SetAppInfo } from './store/actions/app-info.actions';
import { SetProfile } from './store/actions/profile.actions';
import { iAppInfo } from './store/models/app-info';
import { iAppState } from './store/models/app-state';
import { iProfile } from './store/models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-practice';
  isSidebarExpanded: Boolean | null = null;

  circularMenuOptions: iCircularMenuOption = {
    icon: 'fa fa-cog',
    styles: {
      'font-size': '1.25rem',
      'margin-left': '0.5rem',
    },
  };

  wings: iCircularMenuWing[] = [
    { icon: 'fa fa-home', title: 'Home' },
    { icon: 'fa fa-user', title: 'User' },
    { icon: 'fa fa-pencil', title: 'Edit' },
  ];

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private appStateService: AppStateService,
    private appDataServie: AppDataService,
    private store: Store<iAppState>
  ) {}

  showSpinner = false;
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.appStateService.getSpinnerState().subscribe((spinnerState) => {
      this.showSpinner = spinnerState;
    });
    this.fetchAppInfoAndProfile();
  }

  fetchAppInfoAndProfile() {
    const _dp = forkJoin({
      appInfo: this.appDataServie.sendGetRequest<iAppInfo>(
        'services/app/getAppInfo'
      ),
      profile: this.appDataServie.sendGetRequest<iProfile>(
        'services/app/getProfile'
      ),
    });
    _dp.subscribe(
      (res) => {
        this.store.dispatch(new SetAppInfo(res.appInfo));
        this.store.dispatch(new SetProfile(res.profile));
      },
      (err) => console.log(err.message)
    );
  }
}
