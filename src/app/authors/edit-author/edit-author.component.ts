import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { iAuthor } from "../author";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  editAuthorForm = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null],
    bookIds: [null]
  })
  initialFormStateHash: String = "";
  isChanged = false;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams)=>{
      let _author = <iAuthor> queryParams;
      this.editAuthorForm.patchValue(_author);
      this.initialFormStateHash = getObjectHash(_author);
    })

    this.editAuthorForm.valueChanges.subscribe((value)=>{
      let _currentFormStateHash = getObjectHash(value);
      this.isChanged = this.initialFormStateHash !== _currentFormStateHash;
    })
  }

}

function getObjectHash(val: Object){
  let _val = JSON.stringify(val);
  return btoa(_val);
}