import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'users/list', 
      component: UsersListComponent
    },
    {
      path: 'user/details/:id', 
      component: UserDetailsComponent
    }
  ])
  ],
  exports:[UsersListComponent]
})
export class UserModule { }
