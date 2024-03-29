import { Component, Input } from '@angular/core';
import { Post } from '../../post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts: Post[] = [];

  onPostAdded(newPost: Post) {
    this.posts.unshift(newPost);
  }
}


