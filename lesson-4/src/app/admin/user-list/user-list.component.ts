import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../objects/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Output() onModifyUser: EventEmitter<User> = new EventEmitter();

  users: User[];

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(users => this.users = users);
  }

  onClickModifyUser(user) {
    console.log('onClickModifyUser is called.');
    this.onModifyUser.emit(user);
  }

}
