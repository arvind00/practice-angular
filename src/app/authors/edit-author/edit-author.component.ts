import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iAuthor } from "../author";
import { CanDeactiveComponent } from '../../guards/can-deactivate.guard'
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit, CanDeactiveComponent {

  editAuthorForm = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null],
    bookIds: [null]
  })
  initialFormStateHash: String = "";
  isChanged = false;

  constructor(
    private fb: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService
  ) { }

  canDeactivate(){
    if(!this.isChanged) return true;
    return new Promise<boolean>((resolve, reject)=>{
      this.confirmationService.confirm({
        message: 'Unsaved changes will be lost. Discard changes?',
        header: 'Leave Page',
        icon: "pi pi-exclamation-triangle",
        accept: ()=> resolve(true),
        reject: ()=> reject(false)
      });
    })
  }

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

  saveChanges(){
   console.log('save changes'); 
   this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}

function getObjectHash(val: Object){
  let _val = JSON.stringify(val);
  return btoa(_val);
}