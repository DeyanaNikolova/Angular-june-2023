import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user/list', component: UserListComponent},
      {path: 'user/details/:id', component: UserDetailsComponent}
    ]),
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
