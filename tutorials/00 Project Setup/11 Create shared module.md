## Learning Objective
- [x] create a shared module to hold shared components, directives, pipes and other commonly used modules

### Design Plan
- We will create a shared module
- We will import this module in the root module
- In the shared module we will import the material module and export it as well
- Doing so will let our app access to material components as well as components exposed by shared module

### Step 1 - Generate share module
- `ng g m shared`
- After the command is run, you should see a `src/app/shared/shared.module.ts`
- Update it to import and export material module
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule { }

```

### Step 2 - Import Shared Module in Root Module
```ts
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SharedModule,
    PRIME_MODULES,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```