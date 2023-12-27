 import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./types/UserPlaceholder";

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: User[] = [];

  constructor(private http: HttpClient) {
//     setInterval(()=>{
// this.users.push({
//   name: 'DemoName',
//   age: 0
// });
// console.log('User has been added!');

//     }, 3000);
  }

  addUser(inpuName: HTMLInputElement, inputAge: HTMLInputElement): void {
   // const user = { name: inpuName.value, age: Number(inputAge.value) };
    //  // this.users.push(user);
    // this.users = [...this.users, user];

    inpuName.value = '';
    inputAge.value = '';
  } 

  getUsers(){
    // Promise 
    // return fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=>res.json())

    // Observable
   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users') 
  }

}
