import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dependency Injection, RXJS and Services';

  appUsers: User[] = [];

constructor(public userService: UserService){
  this.appUsers = this.userService.users;
}

setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
  this.userService.addUser(inputName, inputAge);
  this.appUsers = this.userService.users;
}
}
 