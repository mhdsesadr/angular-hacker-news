import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CommentsComponent} from "./comments/comments.component";
import {StoryComponent} from "./story/story.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: StoryComponent},
      {path: ':id', component: CommentsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
