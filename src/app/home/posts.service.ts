import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  showUserId?: boolean;
}

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsShowingUserId = 0;
  postsShowingUserId$ = new BehaviorSubject<number>(0);

  posts$ = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
  }

  fetchPosts() {
    this.http.get<Post[]>(`${environment.jsonApiURL}/posts`)
      .pipe(
        untilDestroyed(this), 
        take(1)
      )
      .subscribe((response: Post[]) => this.posts$.next(response));
  }

  getPostsShowingUserId() {
    return this.postsShowingUserId;
  }

  incPostsShowingUserId() {
    this.postsShowingUserId$.next(++this.postsShowingUserId);
  }

  decPostsShowingUserId() {
    this.postsShowingUserId$.next(--this.postsShowingUserId);
  }
}
