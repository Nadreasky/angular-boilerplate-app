import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/index';
import { selectLoggedInUser } from 'src/app/store/auth/selectors/auth.selectors';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedInUser$: Observable<User> = null;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.store.select(selectLoggedInUser);
  }
}
