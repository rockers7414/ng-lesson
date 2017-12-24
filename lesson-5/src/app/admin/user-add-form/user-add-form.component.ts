import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { UserService } from '../../services/user.service';

import {
  EMAIL_PATTERN,
  PASSWORD_PATTERN
} from '../../validation';

import { User } from '../../objects/user';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.scss']
})
export class UserAddFormComponent implements OnInit, OnChanges {

  emailPattern = EMAIL_PATTERN;
  passwordPattern = PASSWORD_PATTERN;

  @Input() modifiedUser: User;
  @Output() onAddedUser: EventEmitter<User> = new EventEmitter();
  @Output() onModifiedUser: EventEmitter<User> = new EventEmitter();
  @Output() onCanceledModifyUser: EventEmitter<User> = new EventEmitter();

  user: User;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (this.modifiedUser) {
      this.user = JSON.parse(JSON.stringify(this.modifiedUser));
    } else {
      this.user = new User();
    }
    console.log(this.user);
  }

  onAddUser() {
    console.log('onAddUser is called.');
    console.log(this.user);
    this.userSvc.addUser(this.user).subscribe(result => {
      if (result) {
        console.log('user is added.');
        this.onAddedUser.emit(result);
      }
    });
  }

  onSaveUser() {
    this.userSvc.updateUser(this.user).subscribe(result => {
      if (result) {
        console.log('user is updated.');
        this.onModifiedUser.emit(result);
      }
    });
  }

  onCancelModifyUser() {
    console.log('onCancelModifyUser is called.');
    this.onCanceledModifyUser.emit(this.modifiedUser);
  }

}
