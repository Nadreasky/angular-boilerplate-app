import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from '../../../core/services';
import {
  UserActionTypes,
  LoadUsers,
  LoadUsersSuccess,
  LoadUsersFailure
} from '../actions/user.actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private userService: UserService
  ) {}

  @Effect()
  loadUsers$ = this.action$.pipe(
    ofType<LoadUsers>(UserActionTypes.LOAD_USERS),
    mergeMap(() => {
      return this.userService.loadUsers().pipe(
        map(users => new LoadUsersSuccess({ users })),
        catchError(error => of(new LoadUsersFailure(error)))
      )
    })
  );
}