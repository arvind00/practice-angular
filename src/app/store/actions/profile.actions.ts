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
