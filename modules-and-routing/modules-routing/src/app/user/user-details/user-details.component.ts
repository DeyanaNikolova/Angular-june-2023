import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {


  constructor(private activatedRoute: ActivatedRoute) {
    // static way
  console.log('snapshot.data ', this.activatedRoute.snapshot.data['user']);

  // dynamic way
  this.activatedRoute.params.subscribe((v)=> console.log('params.subscribe ', v));
  }
}
