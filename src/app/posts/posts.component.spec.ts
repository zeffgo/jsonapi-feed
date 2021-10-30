import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

<<<<<<< HEAD:src/app/home/posts/posts.component.spec.ts
import { PostsComponent } from './posts.component';

=======
import { PostsComponent } from './posts.component';


>>>>>>> 090ff66a4db4154f8780a2f331322887468ffab8
describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ]
<<<<<<< HEAD
=======
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
>>>>>>> 090ff66a4db4154f8780a2f331322887468ffab8:src/app/posts/post/post.component.spec.ts
=======
>>>>>>> 090ff66a4db4154f8780a2f331322887468ffab8
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:src/app/home/posts/posts.component.spec.ts
    fixture = TestBed.createComponent(PostsComponent);
=======
    fixture = TestBed.createComponent(PostComponent);
>>>>>>> 090ff66a4db4154f8780a2f331322887468ffab8:src/app/posts/post/post.component.spec.ts
=======
    fixture = TestBed.createComponent(PostsComponent);
>>>>>>> 090ff66a4db4154f8780a2f331322887468ffab8
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
