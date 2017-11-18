import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

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

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.user = this.authSvc.LoggedInUser;
    this.loginTime = Moment().format('LTS');
  }

}
