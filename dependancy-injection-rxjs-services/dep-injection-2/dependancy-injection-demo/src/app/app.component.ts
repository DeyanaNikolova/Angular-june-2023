import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dependancy Injection 2';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  setUser(inputName: HTMLInputElement, inpitAge: HTMLInputElement): void {
    this.userService.addUser(inputName, inpitAge);
    this.appUsers = this.userService.users;
  }
}
