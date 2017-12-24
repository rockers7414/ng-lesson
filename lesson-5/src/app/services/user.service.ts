import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../objects/user';
import { Result, Collection } from '../objects/result';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getMyInfo(): Observable<User> {
    return this.http.get<Result>(environment.api_service + '/v1/users/me')
      .map(result => {
        if (result.data) {
          return result.data as User;
        }
        return null;
      });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<Collection>(environment.api_service + '/v1/users')
      .map(result => {
        if (result.data) {
          return result.data as User[];
        }
        return null;
      });
  }

  addUser(user: User): Observable<User> {
    return this.http.put<Result>(environment.api_service + '/v1/users', user)
      .map(result => {
        if (result.data) {
          return result.data as User;
        }
        return null;
      });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<Result>(environment.api_service + '/v1/users/' + user._id, user)
      .map(result => {
        if (result.data) {
          return result.data as User;
        }
        return null;
      });
  }

}
