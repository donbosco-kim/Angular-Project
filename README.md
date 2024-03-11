# Angular-Project
This is a basic angular project set up. Create components or modules as you need them.

## Set Up
- npm install -g @angular/cli@lastest
- ng new my-app (name it whatever) --strict=false --no-standalone
- cd my-app (or whatever is named)
### Install Angular Material
- ng add @angular/material
### Create Components & Modules
- ng generate component subfolder/component name
- ng generate component post/post-file
- ng generate component post/post-list
- ng generate component head-create/header
- ng generate module subfolder/module name
- ng generate module post/post-file
- ng generate module post/post-list
- ng generate module head-create/header

## Documentation
### Summary
My project have only create functionality and when clicked the submit button, the post I make will be added to the Post List on the right side. 

### Component Creation: 
- In my post folder, I have created post-file and post-list components in their own folder. 
- My PostListComponent is able to receive an array of post objects from PostFileComponent
```ts
export class PostListComponent {
  @Input() posts: Post[] = [];

  onPostAdded(newPost: Post) {
    this.posts.unshift(newPost);
  }
}
```
### Interface Usage:
- My project have a shared model file called post.model with two properties: id and content in my app directory
- It is used to type-check the array of posts (int, string).
### Data Binding and Display:
- There is a property binding between PostFileComp and PostListComp
- *ngFor is used to loop through all the contents 
```ts
<mat-expansion-panel *ngFor="let post of posts">
    <mat-expansion-panel-header>
     <p>{{ post.content }}</p>
    </mat-expansion-panel-header>
</mat-expansion-panel>
```
### EventEmitter for New Posts:
- I have implemented an EventEmitter in PostFileComponent that emits a newly created post object to the parent component. Whenever a new post is added in PostFileComponent, the PostListComponent listens to this event and updates the list of posts accordingly.
```ts
<app-post-file (postAdded)="onPostAdded($event)"></app-post-file>
<app-post-list [posts]="posts"></app-post-list>
```
### Forms for Post Submission:
- I utilizes the formsmodule and clear the post content upon submission.
```ts
<mat-card>
  <div>
    <textarea [(ngModel)]="enteredValue" placeholder="Enter your post..."></textarea>
  </div>
  <button (click)="onAddPost()">Submit</button>
</mat-card>
```
### Styling and Layout:
- I did take quite a while to get this right, but it is good now. I just go through the instruction line by line and made it work.
```css
/* Set the width of the card to 48% */
mat-card {
  width: 48%;
}

/* Center the text area and button vertically under the card */
mat-card div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Set the width of the text area to 100% coz the card itself is already 48% */
textarea {
  width: 100%;
}

/* Set the width of the submit button to 50%, add margin, and center vertically */
button {
  width: 50%;
  margin: auto;
}

/* Display the text area and mat-expansion-panel side by side, each taking up 50% of the screen */
mat-card, mat-expansion-panel {
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding: 10px;
}
```
### Documentation:
- Angular have components and modules that it uses to display data in the UI. For instance, post-file.comp.ts is where the logic happen and post-file.comp.html is where it display the data in UI. The interesting about css in angular is that each comps have their own css and then there is the global css (styles.css which is what I used for this project) in src dir. The global styling will affect the whole project whereas the comp specific css styling will only the affect that component html. The modules are just for exporting or rendering views. 