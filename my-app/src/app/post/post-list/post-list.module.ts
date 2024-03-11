import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { PostListComponent } from './post-list.component';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
  ],
  exports: [PostListComponent],
})
export class PostListModule { }

