import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class AuthorizationService {

  constructor(
    private _apiService: ApiService
  ) { }

  public getAccessToken(): string {
    return 'MockAccessToken1234567890';
  }

  public login(username: string, password: string): Observable<User> {
    //Fake check username and password
    if (username === 'nadreak' && password === '1234x@X') {
      return this._apiService.get<User>('/users/1');
    }
  }
}
