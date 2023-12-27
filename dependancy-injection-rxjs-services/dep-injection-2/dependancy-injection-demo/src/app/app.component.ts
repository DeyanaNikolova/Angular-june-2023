import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dependancy Injection 2';
  appUsers: User[] = [];
  isLoading: boolean = true;

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit(): void {
    this.userService.getUsers()
    .then((users)=> {
    this.appUsers = users;
    this.isLoading = false;
    });
  }
  setUser(inputName: HTMLInputElement, inpitAge: HTMLInputElement): void {
    this.userService.addUser(inputName, inpitAge);
    this.appUsers = this.userService.users;
  }
}
