import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Post, PostsService } from './posts.service';

@UntilDestroy()
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.posts$
      .pipe(untilDestroyed(this))
      .subscribe((response: Post[]) => this.onPostsLoaded(response));

    this.postsService.fetchPosts();
  }

  onPostsLoaded(posts: Post[]) {
    this.posts = posts;
  }

  onClickPost(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.showUserId = !post.showUserId;
      if (post.showUserId) {
        this.postsService.incPostsShowingUserId();
      } else {
        this.postsService.decPostsShowingUserId();
      }
    } else {
      throw new Error('post not found');
    }
  }

}
