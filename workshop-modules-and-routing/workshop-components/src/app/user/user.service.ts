import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

const USER_KEY = '[user]';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
}
