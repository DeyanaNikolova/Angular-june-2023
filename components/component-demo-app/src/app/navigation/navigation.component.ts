import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  title = 'hide';
  toggle = false;


  handleClick(){
   this.toggle = !this.toggle;
   console.log(this.toggle);
    
  }
}
