import { AppState } from '../../index';
import { createSelector } from '@ngrx/store';

export const selectUserState = (state: AppState) => state.user;

export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);

export const selectUsersLoadStatus = createSelector(
  selectUserState,
  state => state.loading
);