import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../objects/user';

import * as Moment from 'moment';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  user: User;
  loginTime;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getMyInfo()
      .subscribe(result => {
        this.user = result;
      });
    this.loginTime = Moment().format('LTS');
  }

}
