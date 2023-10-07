import { Component, OnInit } from '@angular/core';
import { Todo } from './types/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[]= [];

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

  addNewTodo(todo: Todo){
this.todos.push(todo);
console.log(this.todos);

  }
}
