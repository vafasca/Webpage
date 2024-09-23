import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLinkedinPostComponent } from './blog-linkedin-post.component';

describe('BlogLinkedinPostComponent', () => {
  let component: BlogLinkedinPostComponent;
  let fixture: ComponentFixture<BlogLinkedinPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogLinkedinPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLinkedinPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
