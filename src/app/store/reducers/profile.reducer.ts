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
