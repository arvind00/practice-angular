import { createSelector } from '@ngrx/store';
import { iAppState } from '../models/app-state';
import { iProfile } from '../models/profile';

const _selectProfile = (state: iAppState) => state.profile;
const _projectProfile = (state: iProfile) => state;

export const ProfileSelector = createSelector(_selectProfile, _projectProfile);
