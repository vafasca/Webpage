import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListCareerComponent } from './card-list-career.component';

describe('CardListCareerComponent', () => {
  let component: CardListCareerComponent;
  let fixture: ComponentFixture<CardListCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
