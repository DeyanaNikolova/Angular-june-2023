import { Component } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isActive = false;

activeUsers = [
  {name: 'Mitko', age: 21}, 
  {name: 'Pesho', age: 30}, 
  {name: 'Maria', age: 25},
  {name: 'Anna', age: 22}
];

  handleClick(): void {
   this.isActive = !this.isActive; 
  }
}
