import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstinctCrazyDescriptionComponent } from './instinct-crazy-description.component';

describe('InstinctCrazyDescriptionComponent', () => {
  let component: InstinctCrazyDescriptionComponent;
  let fixture: ComponentFixture<InstinctCrazyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstinctCrazyDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstinctCrazyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
