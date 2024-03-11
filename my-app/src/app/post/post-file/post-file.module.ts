import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { PostFileComponent } from './post-file.component';

@NgModule({
  declarations: [
    PostFileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  exports: [
    PostFileComponent,
  ],
})
export class PostFileModule { }

