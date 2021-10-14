## Define Selector
- update `app-info.selector.ts` as
```ts
import { createSelector } from '@ngrx/store';
import { iAppInfo } from '../models/app-info';
import { iAppState } from '../models/app-state';

const _selectAppInfo = (state: iAppState) => state.appInfo;
const _projectAppInfo = (state: iAppInfo) => state;

export const AppInfoSelector = createSelector(_selectAppInfo, _projectAppInfo);
```

- update `profile.selector.ts` as
```ts
import { createSelector } from '@ngrx/store';
import { iAppState } from '../models/app-state';
import { iProfile } from '../models/profile';

const _selectProfile = (state: iAppState) => state.profile;
const _projectProfile = (state: iProfile) => state;

export const ProfileSelector = createSelector(_selectProfile,_projectProfile);
```