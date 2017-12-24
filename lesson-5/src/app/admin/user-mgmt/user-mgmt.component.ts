import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../objects/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.scss']
})
export class UserMgmtComponent implements OnInit {

  @ViewChild('addModifyUserDialog') addModifyUserDialog;
  dialog: NgbModalRef;

  users: User[];
  modifiedUser: User;

  constructor(
    private userSvc: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(users => this.users = users);
  }

  onModifyUser(user: User) {
    console.log(user);
    this.modifiedUser = user;
    this.dialog = this.modalService.open(this.addModifyUserDialog);
  }

  onAddUser() {
    this.modifiedUser = null;
    this.dialog = this.modalService.open(this.addModifyUserDialog);
  }

  onAddedUser(user: User) {
    this.users.push(user);
    this.dialog.close();
  }

  onCanceledModifyUser(user: User) {
    this.dialog.close();
  }

  onModifiedUser(user: User) {
    const idx = this.users.findIndex(u => u._id === user._id);
    this.users.splice(idx, 1, user);
    this.dialog.close();
  }

}
