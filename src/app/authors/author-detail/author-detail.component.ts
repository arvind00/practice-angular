import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {iAuthor} from '../author.d';
import {faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  edit = faEdit;

  author: iAuthor | null = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam)=>{
      this.author = <iAuthor> queryParam;
    })
  }

}
