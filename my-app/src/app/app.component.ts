import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [];

  onPostAdded(newPost: Post) {
    this.posts.unshift(newPost);
  }
}

