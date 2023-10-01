import { Component } from '@angular/core';
import { Todo } from '../types/Todo';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  todos: Todo[] = []

  addTodo(inputTitle: HTMLInputElement){
    const todo = {
      title: inputTitle.value
    }
    
  this.todos = [...this.todos, todo];
  console.log(this.todos);
  
  }
}
