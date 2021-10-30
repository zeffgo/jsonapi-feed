import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from 'src/environments/environment';
import { Post } from './interfaces';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

}
