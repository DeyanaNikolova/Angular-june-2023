import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dependancy Injection 2';

  users = [
    {name: 'Ivan', age: 22},
    {name: 'Mitko', age: 12},
    {name: 'Pesho', age: 32},
    {name: 'Penka', age: 82},
  ];
  
}
