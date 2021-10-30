import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';
import { Post } from './interfaces';

@UntilDestroy()
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Post[]>(`${environment.jsonApiURL}/posts`)
      .pipe(untilDestroyed(this))
      .subscribe((response: Post[]) => this.onPostsLoaded(response));
  }

  onPostsLoaded(posts: Post[]) {
    this.posts = posts;
  }

  onClickPost(postId: number) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.showUserId = !post.showUserId;
    } else {
      throw new Error('post not found');
    }
  }

}
