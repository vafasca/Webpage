import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartialNewsComponent } from './home-partial-news.component';

describe('HomePartialNewsComponent', () => {
  let component: HomePartialNewsComponent;
  let fixture: ComponentFixture<HomePartialNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartialNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartialNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
