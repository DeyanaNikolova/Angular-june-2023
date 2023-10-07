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
        title: 'laundry',
        id: this.getRandomId()
      },
      {
        title: 'washing dishes',
        id: this.getRandomId()
      }
    ];
    console.log(this.todos);
    
  }

  getRandomId() {
    return Math.floor((Math.random()*6)+1);
}

  addNewTodo(todo: Todo){
  this.todos.push(todo);

  }
}
