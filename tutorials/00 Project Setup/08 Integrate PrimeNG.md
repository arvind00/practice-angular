## Learning Objective
- [x] install and integrate primeng

## My Opinion About Primeng
- One word: *Awesome!*
- I think it is more complete than Angular Material.
- I love how customizable the p-table and p-treetable are.
- It doesn't mean I have less respect for Angular Material.
- I love both of them.

## Step 1 - Install Pacakges
```sh
npm i primeng primeicons -S
```

## Step 2 - Include Styles
- update `angular.json>projects>angular-practice>architect>build>styles`
```ts
style: [
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/fluent-light/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
]
```

## Step 3 - Enable Animation and Ripple animation
- Various component of primeng uses angular animations
- Make sure `@angular/animations` is already installed
- Import the `BrowserAnimationsModule` from `@angular/platform-browser/animations` in the root module
- Update `app.component.ts` to allow ripple effect

```ts
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
```

## Step 4 - create prime.ts
- create a file `src/app/prime.ts`
- import the modules and providers from prime ng and export them 
```ts
import { MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

export const PRIME_MODULES = [
    ToastModule,
    RippleModule
]

export const PRIME_PROVIDERS = [
    MessageService
]
```

## Step 5 - include primeng components to root module
- Update `app.module.ts` 
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PRIME_MODULES, PRIME_PROVIDERS } from './prime';

@NgModule({
  declarations: [
    AppComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PRIME_MODULES
  ],
  providers: [
    PRIME_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
## Reference
> https://primefaces.org/primeng/showcase/#/setup