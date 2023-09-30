import { Injectable } from '@angular/core';
import { User } from './types/JsonPlaceholderUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users: User[] = [];

  constructor(private http: HttpClient){
    // const interval = setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 0,
    //   });

    //   console.log('User has been added!');
      
    // }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputEmail: HTMLInputElement){
    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value)
    // };
  
    // this.users = [...this.users, user];
    
    inputName.value = '';
    inputEmail.value = '';
  }

  getUsers(){
    // Promise
    // return fetch('http://jsonplaceholder.typicode.com/users')
    // .then(res => res.json());

    // Observable
   return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }


}
