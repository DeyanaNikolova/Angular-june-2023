import { Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dependency Injection, RXJS and Services';

  users: User[] = [
    {name: 'Ivan', age: 21},
    {name: 'Mitko', age: 25},
    {name: 'Pesho', age: 24},
    {name: 'Maria', age: 12},
  ];
}
