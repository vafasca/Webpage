import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTecnologyCarouselComponent } from './about-tecnology-carousel.component';

describe('AboutTecnologyCarouselComponent', () => {
  let component: AboutTecnologyCarouselComponent;
  let fixture: ComponentFixture<AboutTecnologyCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTecnologyCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTecnologyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
