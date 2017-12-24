import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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

  remember = false;

  constructor(
    private authSvc: AuthService,
    private userSvc: UserService,
    private router: Router,
    private modalService: NgbModal,
    private cookieSvc: CookieService
  ) { }

  ngOnInit() {
    this.email = this.cookieSvc.getObject('email') as string || '';
    this.remember = this.email !== '';
  }

  onSubmit() {
    if (this.remember) {
      this.cookieSvc.putObject('email', this.email);
    } else {
      this.cookieSvc.remove('email');
    }

    this.authSvc.signIn(this.email, this.password).subscribe(result => {
      if (result) {
        console.log('Sign in successful.');
        this.router.navigate(['/member']);
      } else {
        const modalRef = this.modalService.open(ConfirmDialogComponent);
        modalRef.componentInstance.title = 'Error';
        modalRef.componentInstance.msg = 'Failed to sign in!';
      }
    });

  }

}
