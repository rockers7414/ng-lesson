import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { JwtHelper } from 'angular2-jwt';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../objects/user';
import { Result } from '../objects/result';


@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private http: HttpClient,
    private cookieSvc: CookieService
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
    this.cookieSvc.remove('accessToken');

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(email + ':' + password) })
    };
    return this.http.post<Result>(environment.api_service + '/v1/auth/token', {}, httpOptions)
      .map(result => {
        if (result.data) {
          const exp = this.jwtHelper.getTokenExpirationDate(result.data);
          console.log(new Date());
          console.log(exp);
          this.cookieSvc.put('accessToken', result.data, { expires: exp });
          return true;
        }
        return false;
      });
  }

}
