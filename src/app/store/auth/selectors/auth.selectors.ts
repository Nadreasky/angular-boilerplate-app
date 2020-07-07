import { AppState } from '../../index';
import { createSelector } from '@ngrx/store';

export const selectAuth = (state: AppState) => state.auth;

export const selectLoggedInUser = createSelector(
  selectAuth,
  (state) => state.loggedInUser
);