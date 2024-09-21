import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCustomNewsComponent } from './card-custom-news.component';

describe('CardCustomNewsComponent', () => {
  let component: CardCustomNewsComponent;
  let fixture: ComponentFixture<CardCustomNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCustomNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCustomNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
