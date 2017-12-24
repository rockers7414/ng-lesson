import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieModule, CookieService } from 'ngx-cookie';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EqualDirective } from './directives/equal.directive';

import { routing } from './app.routing';
import { MemberInfoComponent } from './member-info/member-info.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

export function jwtOptionsFactory(cookieService) {
  return {
    whitelistedDomains: ['localhost:3000'],
    tokenGetter: () => {
      return cookieService.get('accessToken');
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    routing,
    NgbModule.forRoot(),
    CookieModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [CookieService]
      }
    })
  ],
  providers: [
    UserService,
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule {

  constructor(public auth: AuthService) {
    console.log('AppModule constructor is called.');
  }

}
