import { Component } from '@angular/core';
import { User } from './types/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dependancy Injection 2';

  users: User[] = [
    { name: 'Ivan', age: 22 },
    { name: 'Mitko', age: 12 },
    { name: 'Pesho', age: 32 },
    { name: 'Penka', age: 82 },
  ];

  constructor() {
    setInterval(()=>{
this.users.push({
  name: 'DemoName',
  age: 0
});
console.log('User has been added!');

    }, 3000);
  }

  addUser(inpuName: HTMLInputElement, inputAge: HTMLInputElement): void {
    const user = { name: inpuName.value, age: Number(inputAge.value) };
    // this.users.push(user);
    this.users = [...this.users, user];

    inpuName.value = '';
    inputAge.value = '';
  } 
}
