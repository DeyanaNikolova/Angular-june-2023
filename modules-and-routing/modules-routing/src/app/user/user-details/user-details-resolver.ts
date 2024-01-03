import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/User';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class UserRsolver implements Resolve<User> {
    
    constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.userService.getUserById(route.params['id']);
  }
}
