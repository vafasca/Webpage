import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartialCareersComponent } from './home-partial-careers.component';

describe('HomePartialCareersComponent', () => {
  let component: HomePartialCareersComponent;
  let fixture: ComponentFixture<HomePartialCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartialCareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartialCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
