import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  // http = inject(HttpClient);
  private postSrvice = inject(PostService);
  posts: any = [];

  ngOnInit(): void {
    // this.fetchPosts();
     this.loadPosts();
  }

  // fetchPosts() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .subscribe((posts: any) => {
  //       this.posts = posts;
  //       console.log(posts);
  //     });
  // }

  //  loadPosts() {
  //   this.postSrvice.getPosts().subscribe((posts: any) => {
  //     console.log(posts);
  //     this.posts = posts;
  //   });
  // }
    loadPosts(){
      this.postSrvice.getPosts().subscribe({
        next: (posts: any)=>{
          this.posts = posts;
          console.log('Posts fetched successfully');
        },
        error: (error)=> console.log('Error fetching posts: ', error)
      });
  }
}
