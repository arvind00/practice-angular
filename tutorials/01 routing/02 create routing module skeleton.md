// src/app/app-routing.module.ts

```ts
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes:Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
```

- now import this module in the root module as

// src/app/app.module.ts
import {AppRoutingModule} from './app-routing.module.ts'

@NgModule({
  ...
  imports: [
    BrowserModule,
    AppRoutingModule
  ]
})