import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFileComponent } from './post/post-file/post-file.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { HeaderComponent } from './head-create/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFileComponent,
    PostListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
