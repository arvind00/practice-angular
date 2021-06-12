## Learning Objective
- [] Display a confirmation message when trying a leave a page
- [] This way your will learn to use CanDeactivate guard


## Scenario Briefing
- In the `author-detail` component keep a button named `Edit`
- Clicking on it should load `edit-author` component.
- In `edit-author` component display the author details in a form.
- Make some change and try to leave the page.
- A confirmation dialog should appear with the message: "Unsaved changes will be lost. Do you want to proceed?"
- And it will have two buttons [Yes] and [No]
- Clicking on [Yes] should let the user navigate away.
- Clickingon [No] should cancel the navigation.

## Step 1 - Create edit author form
- Import `ReactiveFormModule` in app.module.ts and include in imports array
```ts
import { ReactiveFormsModule } from '@angular/forms'
```
- Inject `FormBuilder` Service Class into `edit-author` component
- Instantiate a form
```ts
// src/app/authors/edit-author/edit-author.component.ts

````