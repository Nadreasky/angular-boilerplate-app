import { AppState } from '../../index';
import { createSelector } from '@ngrx/store';

export const selectAuthState = (state: AppState) => state.auth;

export const selectLoggedInUser = createSelector(
  selectAuthState,
  state => state.loggedInUser
);