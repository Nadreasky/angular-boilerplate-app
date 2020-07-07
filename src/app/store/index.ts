import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';

//Reducers
import * as authReducer from './auth/reducers/auth.reducer';

//Effects
import { AuthEffects } from './auth/effects/auth.effects';

// Meta reducer
// logger store 
// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<any>[] = !environment.production ? [debug] : [];


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
