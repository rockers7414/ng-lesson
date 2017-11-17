import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import {
  MyValidator,
  EMAIL_PATTERN,
  PASSWORD_PATTERN
} from '../validation';

import { User } from '../objects/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
        confirmPwd: ['', [Validators.required]]
      }, { validator: MyValidator.isEqual })
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    const user = new User();
    user.firstName = this.form.get('firstName').value;
    user.lastName = this.form.get('lastName').value;
    user.email = this.form.get('email').value;
    user.password = this.form.get('passwords').get('password').value;
    this.authSvc.signUp(user).subscribe(result => {
      if (result) {
        console.log('sign up successful.');
        this.router.navigate(['/login']);
      } else {
        alert('Failed to sign up.');
      }
    });
  }

}
