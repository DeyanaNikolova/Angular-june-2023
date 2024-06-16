import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  cards = [
    {
      imageUrl:
        'https://images.pexels.com/photos/953075/pexels-photo-953075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Card 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro sint ducimus quae mollitia modi explicabo exercitationem officiis sequi voluptate?',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/843227/pexels-photo-843227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Card 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro sint ducimus quae mollitia modi explicabo exercitationem officiis sequi voluptate?',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Card 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro sint ducimus quae mollitia modi explicabo exercitationem officiis sequi voluptate?',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/263877/pexels-photo-263877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Card 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro sint ducimus quae mollitia modi explicabo exercitationem officiis sequi voluptate?',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/982865/pexels-photo-982865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Card 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro sint ducimus quae mollitia modi explicabo exercitationem officiis sequi voluptate?',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/953057/pexels-photo-953057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Card 6',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro sint ducimus quae mollitia modi explicabo exercitationem officiis sequi voluptate?',
    },
  ];
}
