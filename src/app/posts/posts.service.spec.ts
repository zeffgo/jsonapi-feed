import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should increase global "flipped" count', () => {
    service.postsShowingUserId = 2;
    service.postsShowingUserId$.subscribe(x => expect(x).toBe(3));
    service.incPostsShowingUserId();
  });
  
  it('should decrease global "flipped" count', () => {
    service.postsShowingUserId = 2;
    service.postsShowingUserId$.subscribe(x => expect(x).toBe(1));
    service.decPostsShowingUserId();
  });
  
  it('should return global "flipped" count', () => {
    service.postsShowingUserId = 11;
    expect(service.getPostsShowingUserId()).toBe(11);
  });
});
