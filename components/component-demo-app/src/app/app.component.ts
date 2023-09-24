import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Demo App';

  users = [
    {name: 'Mitko', age: 21}, 
    {name: 'Pesho', age: 30}, 
    {name: 'Maria', age: 25},
    {name: 'Anna', age: 22}
  ];

  outputChildHandler(){
    console.log('outputChildHandler');
  }
}
