## Learning Objective
- [] Learn how to display a confirm dialog using primeng


## Scenario Briefing
- This is like continuation from previous tuto `11 control leaving a route with canDeactivate`
- In the previous tutorial we used browser in-built confirm dialog.
- In business world client expects a little bit more presentable form of confirm dialog
- So let's try out the `p-confirmDialog`

## Step 1 - import necessary modules and services
```ts
// prime.ts
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

export const PRIME_MODULES = [
    ToastModule,
    RippleModule,
    ConfirmDialogModule
]

export const PRIME_PROVIDERS = [
    MessageService,
    ConfirmationService
]
```
- try to recall how we integrated primeng to our app

## Step 2 - add the tag to the root component
```html
<!-- In the last section add the below line -->
<p-confirmDialog [breakpoints]="{'960px': '75vw', '640px': '100vw'}" [style]="{width: '50vw'}"></p-confirmDialog>
```

## Step 3 - Display the confirm dialog

```ts
// udpate the edit-author.component.ts's contructor and canDeactivate() as below
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
```