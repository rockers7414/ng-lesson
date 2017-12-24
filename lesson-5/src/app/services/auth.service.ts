import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../objects/user';
import { Result } from '../objects/result';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  signUp(user: User): Observable<boolean> {
    return this.http.post<Result>(environment.api_service + '/v1/auth/register', user)
      .map(result => {
        if (result.data) {
          return true;
        }
        return false;
      });
  }

  signIn(email: string, password: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(email + ':' + password) })
    };
    return this.http.post<Result>(environment.api_service + '/v1/auth/token', {}, httpOptions)
      .map(result => {
        if (result.data) {
          this.cookieService.put('accessToken', result.data);
          return true;
        }
        return false;
      });
  }

}
