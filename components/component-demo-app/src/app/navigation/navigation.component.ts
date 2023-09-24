import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsers: {name: string, age: number}[] = [];
  @Output() onChildOutput = new EventEmitter<boolean>();

  isActive = false;
  inputValue = 'Hello';

  handleClick(event: Event): void {
   this.isActive = !this.isActive; 
   this.onChildOutput.emit(this.isActive)
  }
}
