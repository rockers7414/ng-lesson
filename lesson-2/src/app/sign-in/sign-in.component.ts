import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import {
  EMAIL_PATTERN,
  PASSWORD_PATTERN
} from '../validation';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  emailPattern = EMAIL_PATTERN;
  passwordPattern = PASSWORD_PATTERN;

  email: string;
  password: string;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authSvc.signIn(this.email, this.password).subscribe(result => {
      if (result) {
        console.log('Sign in successful.');
      }
    });
  }

}
