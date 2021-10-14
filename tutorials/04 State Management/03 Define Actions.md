## Steps 3 - Define Actions
- update `app-info.action.ts` as
```ts
import { Action } from '@ngrx/store';
import { iAppInfo } from '../models/app-info';

export enum eAppInfoActions {
  SET_APPINFO = 'SET_APPINFO',
  GET_APPINFO = 'GET_APPINFO',
}

export class SetAppInfo implements Action {
  readonly type = eAppInfoActions.SET_APPINFO;
  constructor(public payload: iAppInfo) {}
}

export class GetAppInfo implements Action {
  readonly type = eAppInfoActions.GET_APPINFO;
}

export type AppInfoActions = SetAppInfo | GetAppInfo;

```
- update `profile.actions.ts` as
```ts
import { Action } from '@ngrx/store';
import { iProfile } from '../models/profile';

export enum eProfileActions {
  SET_PROFILE = 'SET_PROFILE',
  GET_PROFILE = 'GET_PROFILE',
}

export class SetProfile implements Action {
  readonly type = eProfileActions.SET_PROFILE;
  constructor(public payload: iProfile) {}
}

export class GetProfile implements Action {
  readonly type = eProfileActions.GET_PROFILE;
}

export type ProfileActions = SetProfile | GetProfile;
```
