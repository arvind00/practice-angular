## Learning Objective
- Learn to protect a route and child routes with CanActivate router guard

## Scenario Briefing
- Let fake a login service
- Guard the `/books` and it's child routes based on whether the user is logged in or not

## Step 1 - Generate a router guard that implements CanActivate

```sh
λ ng g guard auth
? Which interfaces would you like to implement? CanActivate
CREATE src/app/auth.guard.spec.ts (331 bytes)
CREATE src/app/auth.guard.ts (457 bytes)
```

## Step 2 - Create Authentication Service

```sh
ng g s auth
```

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        return this.loggedIn;
      }, 500);
    });
    return promise;
  }
}

```

## Step 3 - Update auth.guard.ts

```ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated()
      .then((authenticated: boolean) => {
        if (authenticated) {
          return authenticated
        } else {
          this.router.navigate(['/login']);
        };
        return false;
      })
  }

}

```
