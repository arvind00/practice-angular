import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(
    private appDataService: AppDataService
  ) { }

  ngOnInit(): void {
  }

  data: {} = {};
  fetchSampleJson() {
    this.appDataService.sendGetRequest<iRes>('assets/data/sample.json').subscribe(res => {
      this.data = res;
    }, err => console.log(err));
  }

}

export interface iRes {
  [prop: string]: any
}