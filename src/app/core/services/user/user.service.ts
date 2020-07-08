import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class UserService {

  constructor(
    private _apiService: ApiService
  ) { }

  loadUsers(): Observable<Array<User>> {
    return this._apiService.get<Array<User>>('/users');
  }
}
