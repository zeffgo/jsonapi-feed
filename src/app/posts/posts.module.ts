import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { postsRoutes } from './posts-routes';
import { PostsComponent } from './posts.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from '../posts/post/post.component';

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbTooltipModule,
    RouterModule.forChild(postsRoutes)
  ]
})
export class PostsModule { }
