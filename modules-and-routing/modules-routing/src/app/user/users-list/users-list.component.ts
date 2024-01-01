import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/User';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  userList: User[] = [];
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.globalLoaderService.showLoader();

    // for testing purposes
    // setTimeout(()=> {
    this.userService.fetchUsers().subscribe((users) => {
      this.userList = users;
      this.globalLoaderService.hideLoader();
      console.log(users);
    });
    // }, 3000);
  }
}
