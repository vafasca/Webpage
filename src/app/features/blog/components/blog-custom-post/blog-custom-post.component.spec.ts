import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCustomPostComponent } from './blog-custom-post.component';

describe('BlogCustomPostComponent', () => {
  let component: BlogCustomPostComponent;
  let fixture: ComponentFixture<BlogCustomPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCustomPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCustomPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
