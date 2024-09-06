import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShortStoryComponent } from './about-short-story.component';

describe('AboutShortStoryComponent', () => {
  let component: AboutShortStoryComponent;
  let fixture: ComponentFixture<AboutShortStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutShortStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutShortStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
