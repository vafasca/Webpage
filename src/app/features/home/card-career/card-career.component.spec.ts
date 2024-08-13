import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCareerComponent } from './card-career.component';

describe('CardCareerComponent', () => {
  let component: CardCareerComponent;
  let fixture: ComponentFixture<CardCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
