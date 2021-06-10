import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService, private authService: AuthService) { }

  isLoggedIn = false;

  ngOnInit(): void {
  }

  showToast() {
    this.messageService.add({ key: 'app-level-toast', sticky: true, severity: 'info', summary: 'Welcome', detail: 'Welcome to Practice Angular' });
  }

  login() {
    this.authService.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
