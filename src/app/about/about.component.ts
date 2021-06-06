import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  title: String | null = null;
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
  }

}
