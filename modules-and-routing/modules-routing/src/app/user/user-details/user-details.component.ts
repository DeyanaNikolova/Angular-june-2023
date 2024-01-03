import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private activetedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    console.log('snapshot.data', this.activetedRoute.snapshot.data['user']);
    this.activetedRoute.params.subscribe((v) =>
      console.log('parans.subscribe', v)
    );
  }

  ngOnInit(): void {
 
  }
}
