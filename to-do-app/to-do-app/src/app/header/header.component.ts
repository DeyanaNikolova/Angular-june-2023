import { Component, Output, EventEmitter,  } from '@angular/core';
import { Todo } from '../types/Todo';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onHeaderOutput = new EventEmitter<Todo[]>();

  todos: Todo[] = [];

  addTodo(even: Event, inputTitle: HTMLInputElement): void{
    const todo = {
      title: inputTitle.value
    }
    
  this.todos = [...this.todos, todo];
  
  console.log(this.todos, todo.title);

  inputTitle.value = ''; 

  this.onHeaderOutput.emit(this.todos);
  }
}
