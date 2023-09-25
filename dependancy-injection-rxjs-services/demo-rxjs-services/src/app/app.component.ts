import { Component } from '@angular/core';
import { User } from './types/User';

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

  constructor(){
    setInterval(() => {
      this.users.push({
        name: 'DemoName',
        age: 0,
      });

      console.log('User has been added!');
      
    }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };
  
    this.users = [...this.users, user]
    
    inputName.value = '';
    inputAge.value = '';
  }
}
 