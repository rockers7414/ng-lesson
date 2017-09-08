import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserService } from './services/user.service';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
