import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types/Todo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() newTodo = new EventEmitter<Todo>()
  todos: Todo[] = [];



  addTodo(inputTitle: HTMLInputElement): void{
    const todo = {
      title: inputTitle.value
    }
    
  this.todos = [...this.todos, todo];
  
  console.log(this.todos);
  this.newTodo.emit(todo);

  inputTitle.value = ''; 
  
  }
}
