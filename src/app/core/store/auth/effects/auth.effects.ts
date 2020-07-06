import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { 
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  LogoutSuccess,
  LogoutFailure
} from '../actions/auth.actions';
import { AuthorizationService } from '../../../services/index';
import { User } from '../../../../shared/models/user.model';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthorizationService
  ) {}

  @Effect()
  login$ = this.action$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN),
    exhaustMap(action => {
      const { username, password } = action.payload;
      return this.authService.login(username, password).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => {
          return of(new LoginFailure({ error }))
        })
      );
    })
  )
}