import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartialAboutUsComponent } from './home-partial-about-us.component';

describe('HomePartialAboutUsComponent', () => {
  let component: HomePartialAboutUsComponent;
  let fixture: ComponentFixture<HomePartialAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartialAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartialAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
