import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../objects/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() onModifyUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickModifyUser(user) {
    console.log('onClickModifyUser is called.');
    this.onModifyUser.emit(user);
  }

}
