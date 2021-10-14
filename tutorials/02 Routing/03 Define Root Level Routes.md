## Learning Objective
- Define root routes in the routing module

## Steps 1 - create components
- Create the below components
  1. home
  1. about
  1. contact
  1. books
- You may use do like `ng g c home --skip-tests=true`
- Similary create the remaining components

## Step 2 - popuate the routes array 
- Next import the components into the routing module
- And define the routes as in the below snippet

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

- Note that the path doesn't have slash but redirect has it.
- Also don't forget to export the `RouterModule`
- Just import this module in `app.module.ts`
- Don't forget to put `router-outlet` element in `app.component.html`