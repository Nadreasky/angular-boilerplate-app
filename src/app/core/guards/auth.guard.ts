import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, switchMap, catchError, take } from 'rxjs/operators';

import { AppState } from '../../store';
import { selectLoggedInUser } from '../../store/auth/selectors/auth.selectors';
import { NavigationService } from '../services'


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private navigationService: NavigationService,
  ) {}

  private checkUserLogin(): Observable<any> {
    return this.store.pipe(
      select(selectLoggedInUser),
      take(1),
      tap(loggedInUser => {
        if (!loggedInUser) {
          this.navigationService.navigateToLogin();
        }
      }),
    );
  }

  canActivate(): Observable<boolean> {
    return this.checkUserLogin().pipe(
      switchMap(() =>  of(true)),
      catchError(() => of(false))
    );
  }
}