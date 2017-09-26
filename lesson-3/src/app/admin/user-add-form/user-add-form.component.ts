import { Component, OnInit, Input, OnChanges } from '@angular/core';

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

  user: User = new User();

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
    if (!changes.modifiedUser.firstChange) {
      this.user = JSON.parse(JSON.stringify(this.modifiedUser));
    } else {
      this.user = new User();
    }
  }

  onAddUser() {
    console.log('onAddUser is called.');
    console.log(this.user);
    this.userSvc.addUser(this.user).subscribe(result => {
      if (result) {
        console.log('user is added.');
      }
    });
  }

  onSaveUser() {
    this.userSvc.updateUser(this.user).subscribe(result => {
      if (result) {
        console.log('user is updated.');
        this.modifiedUser = null;
        this.user = new User();
      }
    });
  }

  onCancelModifyUser() {
    console.log('onCancelModifyUser is called.');
    this.modifiedUser = null;
    this.user = new User();
  }

}
