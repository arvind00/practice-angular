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
