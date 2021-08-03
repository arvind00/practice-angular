# Create root module
* app.module.ts is the main module of your app
* This module is imported and bootstrapped in main.ts

## Steps to create root module

### 01. Export a class called AppModule

```js
export class AppModule{}
```

### 02. Decorate it with @NgModule
```js
import { NgModule } from "@angular/core";
@NgModule({
})
export class AppModule{}
```
### 03 Include BrowserModule
```js
import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports:[
	  BrowserModule
	]
})
export class AppModule{}
```
- Why include `BrowserModule`?
- BrowserModule provides services that are essential to launch and run a browser app.
- BrowserModule also re-exports CommonModule from @angular/common
- which means that components in the AppModule module also have access to the Angular directives every app needs, such as NgIf and NgFor.
> https://stackoverflow.com/questions/49662864/commonmodule-vs-browsermodule-in-angular


### 04 Include the root component (app.component.ts)
*  app.component needs to be included as an element of declarations and bootstrap metadata
*  In the next tutorial create the the root component

```js
import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

//01 first put the BrowserModule as an element of imports array metadata
//02 now include AppComponent as an element of declarations array metadata

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent
    ],
	bootstrap: [AppComponent]
})
export class AppModule{}
```
