import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/types/User';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(private activetedRoute: ActivatedRoute) {
    this.user = this.activetedRoute.snapshot.data['user'];
    // static way
    console.log('snapshot.data', this.activetedRoute.snapshot.data['user']);
    // dynamic way
    this.activetedRoute.params.subscribe((v) =>
      console.log('params.subscribe', v)
    );
  }
  ngOnInit(): void {
    this.user;
  }
}
