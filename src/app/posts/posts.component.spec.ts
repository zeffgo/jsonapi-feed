import { ComponentFixture, discardPeriodicTasks, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { PostsModule } from './posts.module';

const mockPosts = [1, 2, 3].map((id, index) => ({
  id,
  userId: index,
  title: 'title' + index,
  body: 'body' + index,
  showUserId: false
}));

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should start w/o posts; then store posts in class once rcvd', () => {
    expect(component.posts.length).toBe(0);
    component.onPostsLoaded(mockPosts);
    expect(component.posts.length).toBe(mockPosts.length);
  });

  it('should flip showUser boolean on clicking if post found; throw if not', () => {
    component.posts = mockPosts;
    expect(component.posts[0].showUserId).toBeFalsy();

    component.onClickPost(component.posts[0].id);
    expect(component.posts[0].showUserId).toBeTruthy();

    expect( function(){ component.onClickPost(-Infinity) } ).toThrow();
  });
});
