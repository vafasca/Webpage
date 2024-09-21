import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardListNewsComponent } from './custom-card-list-news.component';

describe('CustomCardListNewsComponent', () => {
  let component: CustomCardListNewsComponent;
  let fixture: ComponentFixture<CustomCardListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCardListNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
