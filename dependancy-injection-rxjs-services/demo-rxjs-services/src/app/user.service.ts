import { Injectable } from '@angular/core';
import { User } from './types/User';

// @Injectable({
//   providedIn: 'root'
// })

export class UserService {

  users: User[] = [];

  constructor(){
    // const interval = setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 0,
    //   });

    //   console.log('User has been added!');
      
    // }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };
  
    this.users = [...this.users, user];
    
    inputName.value = '';
    inputAge.value = '';
  }

  getUsers(){
    return fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
  }
}
