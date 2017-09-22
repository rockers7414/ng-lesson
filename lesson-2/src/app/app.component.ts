import { Component } from '@angular/core';
import { User } from './objects/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User;

  onModifyUser(event) {
    console.log(event);
    this.user = event as User;
  }

}
