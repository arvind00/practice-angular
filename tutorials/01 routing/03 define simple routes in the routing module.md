## Learning Objective
- Define simple routes in the routing module

## Steps
- Lets define two routes for two components say:
  - About
  - Contact
- So run the below commands to generate them
 ```sh
ng g c about
ng g c contact
```
- Next import them into the routing module
- And define the routes as in the below snippet

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about' },
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