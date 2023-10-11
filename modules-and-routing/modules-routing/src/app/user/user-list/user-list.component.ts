import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  userList: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((users) =>{
    this.userList = users;
    });
  }

}
