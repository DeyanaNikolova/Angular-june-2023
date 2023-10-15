import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute) {

  console.log('snapshot.data ', this.activatedRoute.snapshot.data['user']);

  this.activatedRoute.params.subscribe((v)=> console.log('params.subscribe ', v));
  }
  ngOnInit(): void {
   
  }
}
