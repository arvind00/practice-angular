import { createSelector } from '@ngrx/store';
import { iAppInfo } from '../models/app-info';
import { iAppState } from '../models/app-state';

const _selectAppInfo = (state: iAppState) => state.appInfo;
const _projectAppInfo = (state: iAppInfo) => state;

export const AppInfoSelector = createSelector(_selectAppInfo, _projectAppInfo);
