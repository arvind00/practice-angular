import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  showToast() {
    this.messageService.add({ key: 'app-level-toast', sticky: true, severity: 'info', summary: 'Welcome', detail: 'Welcome to Practice Angular' });
  }
}
