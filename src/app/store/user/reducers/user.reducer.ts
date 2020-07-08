import { UserActionTypes, UserActions } from '../actions/user.actions';
import { User } from '../../../shared/models/user.model';
import { LOAD_STATUS } from '../../../shared/constants/load-status';

export interface State {
  loading: string,
  users: Array<User>,
  error: any
}

export const initialState: State = {
  loading: LOAD_STATUS.INITIAL,
  users: null,
  error: null
}

export function reducer(state: State = initialState, action: UserActions) {
  switch(action.type) {
    case UserActionTypes.LOAD_USERS: {
      return {
        ...state,
        loading: LOAD_STATUS.LOADING
      };
    }
    case UserActionTypes.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: LOAD_STATUS.LOADED,
        users: action.payload.users,
        error: null
      };
    }
    case UserActionTypes.LOAD_USERS_FAILURE: {
      return {
        ...state,
        loading: LOAD_STATUS.LOADED,
        users: null,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}