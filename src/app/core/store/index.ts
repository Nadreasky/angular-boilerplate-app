import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

//Reducers
import * as authReducer from './auth/reducers/auth.reducer';

//Effects
import { AuthEffects } from './auth/effects/auth.effects';

export interface AppState {
  router: RouterReducerState,
  auth: authReducer.State
}

export const reducers: ActionReducerMap<AppState> =  {
  router: routerReducer,
  auth: authReducer.reducer
};

export const effects = [
  AuthEffects
];