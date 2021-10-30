import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PostsService } from './home/posts.service';

export const APP_NAME = 'Jsonfeed';
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = APP_NAME;
  postsFlipped = 0;

  constructor(private postsService: PostsService) {
    this.postsService.postsShowingUserId$.pipe(untilDestroyed(this)).subscribe(postsShowingUserId => {
      this.postsFlipped = postsShowingUserId;
    })
  }
}
