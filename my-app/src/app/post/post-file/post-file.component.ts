import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../../post.model';


@Component({
  selector: 'app-post-file',
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  enteredValue = '';
  @Output() postAdded = new EventEmitter<Post>();

  onAddPost() {
    if (this.enteredValue.trim() !== '') {
      const newPost: Post = {
        id: 1,
        content: this.enteredValue
      };
      this.postAdded.emit(newPost);
      this.enteredValue = '';
    }
  }
}



