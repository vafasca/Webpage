import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEmployeeTestimonialComponent } from './about-employee-testimonial.component';

describe('AboutEmployeeTestimonialComponent', () => {
  let component: AboutEmployeeTestimonialComponent;
  let fixture: ComponentFixture<AboutEmployeeTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEmployeeTestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEmployeeTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
