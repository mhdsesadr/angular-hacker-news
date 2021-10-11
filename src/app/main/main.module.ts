import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {HomeComponent} from './home/home.component';
import {StoryComponent} from './story/story.component';
import {CommentsComponent} from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';


@NgModule({
  declarations: [
    HomeComponent,
    StoryComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
