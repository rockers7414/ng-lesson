import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';

import { routing } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    UserListComponent,
    UserAddFormComponent
  ]
})
export class AdminModule {

  constructor() {
    console.log('AdminModule constructor is called.');
  }

}
