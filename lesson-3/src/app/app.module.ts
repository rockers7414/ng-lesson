import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    // UserListComponent,
    // UserAddFormComponent,
    SignUpComponent,
    SignInComponent,
    EqualDirective,
    MemberInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log('AppModule constructor is called.');
  }

}
