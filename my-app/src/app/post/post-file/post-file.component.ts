import { Component } from '@angular/core';

@Component({
  selector: 'app-post-file',
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  enteredValue = '';
  posts: { text: string}[] = [];

  onAddPost() {
    if (this.enteredValue.trim() !== '') {
      const newPost = {
        text: this.enteredValue
      }
      this.posts.unshift(newPost);
      this.enteredValue = '';
    }
  }
}

