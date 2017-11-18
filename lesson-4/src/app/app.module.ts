import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieModule } from 'ngx-cookie';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
/*import { UserListComponent } from './user-list/user-list.component';*/
/*import { UserAddFormComponent } from './user-add-form/user-add-form.component';*/
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EqualDirective } from './directives/equal.directive';

import { routing } from './app.routing';
import { MemberInfoComponent } from './member-info/member-info.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserListComponent,
    // UserAddFormComponent,
    SignUpComponent,
    SignInComponent,
    EqualDirective,
    MemberInfoComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgbModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule {

  constructor() {
    console.log('AppModule constructor is called.');
  }

}
