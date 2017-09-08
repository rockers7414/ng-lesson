import { Injectable } from '@angular/core';
import { User } from '../objects/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { USERS } from '../mock-data/user-data';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = USERS;
  }

  getUsers(): Observable<User[]> {
    return Observable.of(this.users);
  }

  addUser(user: User): Observable<boolean> {
    user.userId = (this.users.length + 1).toString();
    user.isBlock = false;
    this.users.push(user);
    return Observable.of(true);
  }

  updateUser(user: User): Observable<boolean> {
    const _user = this.users.find(u => u.userId === user.userId);
    _user.firstName = user.firstName;
    _user.lastName = user.lastName;
    _user.email = user.email;
    _user.password = user.password;
    return Observable.of(true);
  }

}
