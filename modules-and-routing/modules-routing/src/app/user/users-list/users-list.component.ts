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
  this.loadUsers();
  }

  loadUsers(): void{
    this.globalLoaderService.showLoader();


    // setTimeout(()=> {
    this.userService.fetchUsers().subscribe({
      next: (users) => {
        this.userList = users;
        this.globalLoaderService.hideLoader();
      },
      error: (err) => {
        console.error(`Error: ${err}`);
        this.globalLoaderService.hideLoader();
      },
    });
    //  }, 3000);
  }

  reloadUsers():void{
    this.loadUsers();
  }
}
