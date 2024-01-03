import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRsolver } from './user-details/user-details-resolver';




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
      resolve: { user: UserRsolver },
      component: UserDetailsComponent
    }
  ])
  ],
  exports:[UsersListComponent]
})
export class UserModule { }
