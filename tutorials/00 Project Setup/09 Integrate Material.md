## Learning Objective
- [x] Integrate Angular Material to the current project

## Special Note:
- I read it somewhere that we need to integrate angular material before tailwind css
- as it throws error if we have custom webpack config when installing angular material
- and custom webpack config is required for integrating tailwind css

## Step 1: Add angular material using schematics

```sh
$ ng add @angular/material
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@12.2.1.
✔ Package information loaded.

The package @angular/material@12.2.1 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Custom
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
UPDATE package.json (1399 bytes)
✔ Packages installed successfully.
CREATE src/custom-theme.scss (1504 bytes)
UPDATE angular.json (3335 bytes)
UPDATE src/index.html (796 bytes)
UPDATE src/styles.css (181 bytes)
```

## Step 2: Check if the them colors are working fine.
- create a separate module to import angular material components and include it in the root module
```ts
// src/app/material.module.ts
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
     exports: [
        MatButtonModule
     ]
})
export class MaterialModule {

}
```
- import it in root module
- test out the themes are coming fine
```html
<!-- src/app/home/home.component.html -->
<h3>Raised Buttons</h3>
<div class="example-button-row">
  <button mat-raised-button class="mr-2">Basic</button>
  <button mat-raised-button color="primary" class="mr-2">Primary</button>
  <button mat-raised-button color="accent" class="mr-2">Accent</button>
  <button mat-raised-button color="warn" class="mr-2">Warn</button>
  <button mat-raised-button disabled class="mr-2">Disabled</button>
  <a mat-raised-button routerLink=".">Link</a>
</div>
```
