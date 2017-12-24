import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';

import { routing } from './admin.routing';
import { AdminComponent } from './admin.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    UserListComponent,
    UserAddFormComponent,
    AdminComponent,
    UserMgmtComponent
  ]
})
export class AdminModule {

  constructor() {
    console.log('AdminModule constructor is called.');
  }

}
