import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../store';
import { LoadUsers } from '../../../../store/user/actions/user.actions';
import { selectUsers, selectUsersLoadStatus } from '../../../../store/user/selectors/user.selectors';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { filter, first } from 'rxjs/operators';
import { LOAD_STATUS } from 'src/app/shared/constants/load-status';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  LOAD_STATUS = LOAD_STATUS;

  users$: Observable<Array<User>>;
  loadStatus$: Observable<string>;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectUsers);
    this.loadStatus$ = this.store.select(selectUsersLoadStatus);
    
    this.loadStatus$.pipe(
      filter(loadStatus => loadStatus === LOAD_STATUS.INITIAL),
      first(),
    ).subscribe(() => this.store.dispatch(new LoadUsers()));
  }
}
