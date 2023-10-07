import { Component, OnInit } from '@angular/core';
import { Todo } from '../../types/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  inputTitle: string ='';

  ngOnInit(): void {
    this.todos = [
      {
        title: 'laundry'
      },
      {
        title: 'washing dishes'
      }
    ];
  }

  
  addTodo(inputTitle: HTMLInputElement): void{
    const todo = {
      title: inputTitle.value
    }
    
  this.todos = [...this.todos, todo];
  
  inputTitle.value = ''; 
  
  }
}
