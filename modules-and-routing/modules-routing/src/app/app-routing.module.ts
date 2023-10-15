import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'user/list'},
  {path: 'todo-list', component: TodoListComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
