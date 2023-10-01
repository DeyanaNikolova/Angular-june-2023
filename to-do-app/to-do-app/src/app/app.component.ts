import { Component } from '@angular/core';
import { Todo } from './types/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
todos: Todo[] = [];

  onAddClickHandler(todos: Todo[]){
    todos = this.todos
  console.log('output from header');
  
  }
}
