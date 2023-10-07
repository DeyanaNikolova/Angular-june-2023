import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/types/Todo';
@Component({
  selector: 'app-tod-card',
  templateUrl: './tod-card.component.html',
  styleUrls: ['./tod-card.component.css']
})
export class TodCardComponent {
  @Input() todo: Todo | undefined = undefined;

 todos: Todo[] = []; 

 deleteTodo(){
  console.log('delete clicked');
  
 }
}
