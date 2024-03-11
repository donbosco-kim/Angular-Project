import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostFileModule } from './post/post-file/post-file.module';
import { PostListModule } from './post/post-list/post-list.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './head-create/header/header.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    PostFileModule,
    PostListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
