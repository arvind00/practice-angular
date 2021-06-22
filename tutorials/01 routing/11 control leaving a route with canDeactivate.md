## Learning Objective
- [x] Display a confirmation message when trying a leave a page
- [x] This way your will learn to use CanDeactivate guard


## Scenario Briefing
- In the `author-detail` component keep a button named `Edit`
- Clicking on it should load `edit-author` component.
- In `edit-author` component display the author details in a form.
- Make some change and try to leave the page.
- A confirmation dialog should appear with the message: "Unsaved changes will be lost. Do you want to proceed?"
- And it will have two buttons [Yes] and [No]
- Clicking on [Yes] should let the user navigate away.
- Clickingon [No] should cancel the navigation.

## Implementation Strategy
- Create an interface that gives the signature of a canDeactive method before the guard service class is created
```ts
export interface CanDeactiveComponent {
  canDeactivate: ()=> Observable<boolean> | Promise<boolean>;
}
```
- Generate the canDeactive guard as
```ts
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactiveComponent> {
  canDeactivate(
    component: CanDeactiveComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    next?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate();
  }
  
}
```
- update the routing module, the `authors/:id/edit` route as
```ts
  {
    path: 'authors', component: AuthorsComponent, canActivateChild: [AuthGuard], children: [
      { path: ':id', component: AuthorDetailComponent },
      { path: ':id/edit', component: EditAuthorComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
```
- [x] don't forget to add this guard to the module providers array
- [x] Next make sure the author-edit component implements the `CanDeactivateComponent` interface
- [x] After user clicks on [Save Changes]
  - update the flag that tracks unsaved changes and
  - navigate to author page(use relative routing)

```ts
// src/app/authors/edit-author/edit-author.component.ts
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iAuthor } from "../author";
import { CanDeactiveComponent } from '../../guards/can-deactivate.guard'

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
  ) { }

  canDeactivate(){
    if(!this.isChanged) return true;
    return confirm('Unsaved changes will be lost. Discard changes?');
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
````