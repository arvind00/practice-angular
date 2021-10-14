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
