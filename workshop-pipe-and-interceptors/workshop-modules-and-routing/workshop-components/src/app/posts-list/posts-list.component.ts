import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;
  // thereAreNoPosts: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.isLoading = false;

        // Check for empty posts array
        // this.posts = [];
        // if (this.posts.length === 0) {
        //   this.thereAreNoPosts = true;
        // }
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`);
      },
    });
  }
}
