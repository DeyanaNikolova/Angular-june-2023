import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Control Flow';

  userRole: string = 'candidate';

  productList = [
    {id:1, name: 'I Phone'},
    {id:2, name: 'I Pad'},
    {id:3, name: 'MacBook'},
    {id:4, name: 'HP Laptop'},
    {id:5, name: 'Samsung TV'},
  ]
}
