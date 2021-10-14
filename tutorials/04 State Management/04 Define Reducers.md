## Define reducers
- update `app-info.reducer.ts` as
```ts
import { AppInfoActions, eAppInfoActions } from '../actions/app-info.actions';
import { iAppInfo } from '../models/app-info';

export function appInfoReducer(
  state: iAppInfo = { appName: null, appVersion: null },
  action: AppInfoActions
): iAppInfo {
  switch (action.type) {
    case eAppInfoActions.SET_APPINFO:
      return Object.assign({}, action.payload);
    case eAppInfoActions.GET_APPINFO:
      return state;
    default:
      return state;
  }
}
```

- update `profile.reducer.ts` as
```ts
import { eProfileActions, ProfileActions } from '../actions/profile.actions';
import { initiaProfileState, iProfile } from '../models/profile';

export function profileReducer(
  state: iProfile = initiaProfileState,
  action: ProfileActions
): iProfile {
  switch (action.type) {
    case eProfileActions.SET_PROFILE:
      return Object.assign({}, action.payload);
    case eProfileActions.GET_PROFILE:
      return state;
    default:
      return state;
  }
}
```
- finally create `app.reducer.ts` which will map the states and reducers 
```ts
import { ActionReducerMap } from "@ngrx/store";
import { iAppState } from "../models/app-state";
import { appInfoReducer } from "./app-info.reducer";
import { profileReducer } from "./profile.reducer";


export const appReducer: ActionReducerMap<iAppState, any> = {
    appInfo: appInfoReducer,
    profile: profileReducer
}
```