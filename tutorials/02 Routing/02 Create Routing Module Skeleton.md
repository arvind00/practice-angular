## Learning Objective
- Create a module to define routes
- import it to `app.module.ts`

## Step 1 - create routing module
- Create a class called `AppRoutingModule`
- Decorate with `@NgModule` from `@angular/core`
- create an array: `routes` of type `Routes` from `@angular/router`
- as of now keep it empty we will populate it in the next tutorial
- update the meta data of the module as in the snippet below

```ts
// src/app/app-routing.module.ts

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes:Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
```

## Step 2 - import this module in the root module

```ts
// src/app/app.module.ts
import {AppRoutingModule} from './app-routing.module.ts'

@NgModule({
  ...
  imports: [
    BrowserModule,
    AppRoutingModule
  ]
})
```
