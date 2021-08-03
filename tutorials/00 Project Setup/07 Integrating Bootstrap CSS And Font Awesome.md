## Learning Objective
- Here we will include just the css of bootstrap5 via CDN link url
- This is to quickly start with it
- For proper installation via npm we will take up in a future tutorial

## Include Bootstrap5
- update index.html to inlcude the cdn link to bootstrap
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularPractice</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

## Include Font-awesome
- we will install angular-fontawesome

```sh
$ ng add @fortawesome/angular-fontawesome
ℹ Using package manager: npm
✔ Found compatible package version: @fortawesome/angular-fontawesome@0.9.0.
✔ Package information loaded.

The package @fortawesome/angular-fontawesome@0.9.0 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose Font Awesome icon packages you would like to use: Free Solid Icons
    Formatting was skipped because tslint is not installed.
UPDATE package.json (1232 bytes)
UPDATE src/app/app.module.ts (407 bytes)
✔ Packages installed successfully. 
```

Add FontAwesomeModule to imports in src/app/app.module.ts:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Tie the icon to the property in your component src/app/app.component.ts:
```ts
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCoffee = faCoffee;
}
```
Use the icon in the template src/app/app.component.html
```html
<fa-icon [icon]="faCoffee"></fa-icon>
```

For brands install
```sh
npm i @fortawesome/free-brands-svg-icons
```

## Reference
> https://getbootstrap.com/docs/5.0/getting-started/introduction/
> https://github.com/FortAwesome/angular-fontawesome
