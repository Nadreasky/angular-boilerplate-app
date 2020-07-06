import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';
import { User } from '../../../../shared/models/user.model';
import { Auth } from '../../../../shared/models/auth.model';


export interface State {
  loading: boolean,
  loggedInUser: User,
  error: any;
}

export const adapter: EntityAdapter<Auth> = createEntityAdapter<Auth>();

export const initialState: State = {
  loading: false,
  loggedInUser: null,
  error: null
};

export function reducer(state: State = initialState, action: AuthActions): State {
  switch(action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.payload.user
      };
    }
    case AuthActionTypes.LOGIN_FAILURE:
    case AuthActionTypes.LOGOUT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: null
      };
    }
  }
}