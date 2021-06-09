# Steps to Create main.ts

## Learning Objective
- [x] Understand what files are needed to start up the app
- [x] Understand how they are linked to each other

## main.ts
* main.ts is a simple typescript file
* it is important because it is the starting point of your angular app
* main.ts doesn't use any special decorators | it is just plain TS.
* it just imports some basic modules to start up your app
* It does 2 things:
	* enables prod mode based on env variable
	* bootstraps the root module by calling `platformBrowserDynamic().bootstrapModule()`

Let's compose it
## 01. Enable Production mode for production environment
* in the development mode angular performs a lot of asserts and checks
* enabling production mode skips those
* doing so will result in the below code

```ts
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if(environment.production){
    enableProdMode();
}
```
## 02. Now bind your main app module (normally app.module.ts)
* For this you have to call the bootstrapModule() of PlatformRef
* PlatformRef is returned by calling the constant platformBrowserDynamic

```ts
import { environment } from './environments/environment';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//01 enable production mode for production environment
if(environment.production){
    enableProdMode();
}

//02 Bind the appModule
platformBrowserDynamic().bootstrapModule(AppModule);
```
