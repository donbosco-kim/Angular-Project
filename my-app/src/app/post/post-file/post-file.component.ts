import { Component } from '@angular/core';

@Component({
  selector: 'app-post-file',
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  newPostText = '';
  posts: { text: string; timestamp: Date }[] = [];

  submitPost() {
    if (this.newPostText.trim() !== '') {
      const newPost = {
        text: this.newPostText,
        timestamp: new Date()
      };
      this.posts.unshift(newPost); // Add new post to the beginning of the array
      this.newPostText = ''; // Clear the textarea
    }
  }
}
