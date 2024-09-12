import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTimelineComponent } from './about-timeline.component';

describe('AboutTimelineComponent', () => {
  let component: AboutTimelineComponent;
  let fixture: ComponentFixture<AboutTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
