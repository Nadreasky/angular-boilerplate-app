import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export enum AuthActionTypes {
  LOGIN = '[AUTH] LOGIN',
  LOGIN_SUCCESS = '[AUTH] LOGIN SUCCESS',
  LOGIN_FAILURE = '[AUTH] LOGIN FAILURE',

  LOGOUT = '[AUTH] LOGOUT',
  LOGOUT_SUCCESS = '[AUTH] LOGOUT SUCCESS',
  LOGOUT_FAILURE = '[AUTH] LOGOUT FAILURE',
};

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;

  constructor(public payload: {username: string, password: string}) {

  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {
    
  }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: any }) {
    
  }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;

  constructor() {

  }
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;

  constructor() {
    
  }
}

export class LogoutFailure implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;

  constructor(public payload: { error: any }) {
    
  }
}

export type AuthActions = 
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutSuccess
  | LogoutFailure;