# Steps to create app.component.ts
* app.component.ts is really important because it is the main component of your app
* This component is imported and binded in app.module.ts
* And it is rendered in `index.html` as the root component.

## 01. Export a class called AppComponent

```js
export class AppComponent{}
```

## 02. Decorate it with @Component
```js
import { Component } from "@angular/core";

@Component({

})
export class AppComponent{}
```
## 03 Give a selector value which will be the custom tag name for this component
```js
import { Component } from "@angular/core";

@Component({
    selector: 'app-root'
})
export class AppComponent{}
```
## 04 Give a templateUrl value which is the path to your html content of this component
*  app.component needs to be included as an element of declarations array metadata

```js
import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent{}
```

```html
// src/app/app.component.html
<div class="d-grid">
  <button class="btn btn-outline-info"> Welcome to Practice Angular - It is going to be Awesome </button>
</div>
```
