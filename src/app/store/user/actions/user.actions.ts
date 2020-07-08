import { Action } from '@ngrx/store';
import { User } from '../../../shared/models/user.model';

export enum UserActionTypes {
  LOAD_USERS = '[USER] LOAD USERS',
  LOAD_USERS_SUCCESS = '[USER] LOAD USERS SUCCESS',
  LOAD_USERS_FAILURE = '[USER] LOAD USERS FAILURE',
};

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;

  constructor() {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: { users: Array<User> }) {}
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAILURE;

  constructor(public payload: { error: any }) {}
}

export type UserActions = 
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFailure;