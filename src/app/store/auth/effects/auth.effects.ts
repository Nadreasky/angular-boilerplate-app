import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, act } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { 
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  LogoutSuccess,
  LogoutFailure
} from '../actions/auth.actions';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';
import { User } from 'src/app/shared/models/user.model';
import { of } from 'rxjs';
import { NavigationService } from 'src/app/core/services';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthorizationService,
    private navigationService: NavigationService
  ) {}

  @Effect()
  login$ = this.action$.pipe(
    ofType<Login>(AuthActionTypes.LOGIN),
    exhaustMap(action => {
      const { username, password } = action.payload;
      return this.authService.login(username, password).pipe(
        map(user => new LoginSuccess({ user })),
        tap(() => this.navigationService.navigateToHomepage()),
        catchError(error => {
          return of(new LoginFailure({ error }))
        })
      );
    })
  )
}