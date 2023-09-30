import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dependency Injection, RXJS and Services';

  appUsers: User[] = [];
  isLoading = true;

constructor(public userService: UserService){
  this.appUsers = this.userService.users;
}

setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement): void {
  this.userService.addUser(inputName, inputAge);
  this.appUsers = this.userService.users;
}

ngOnInit(): void {
  this.userService.getUsers()
  .then(users => {
    this.appUsers = users;
    this.isLoading = false;
  });
}

}
 

