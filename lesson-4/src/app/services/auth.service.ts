import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { UserService } from '../services/user.service';

import { User } from '../objects/user';

@Injectable()
export class AuthService {

  private loggedInUser: User;

  get LoggedInUser(): User {
    return this.loggedInUser;
  }

  constructor(private userSvc: UserService) { }

  signUp(user: User): Observable<boolean> {
    this.userSvc.addUser(user);
    return Observable.of(true);
  }

  signIn(email: string, password: string): Observable<boolean> {
    return this.userSvc.getUsers()
    .map(users => {
      this.loggedInUser = users.find(u => u.email === email && u.password === password);
      return this.loggedInUser != null;
    });
  }

}
