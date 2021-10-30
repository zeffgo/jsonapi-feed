import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { postsRoutes } from './posts-routes';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbTooltipModule,
    RouterModule.forChild(postsRoutes)
  ],
})
export class PostsModule { }
