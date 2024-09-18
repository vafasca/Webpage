import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstinctCrazyContainerComponent } from './instinct-crazy-container.component';

describe('InstinctCrazyContainerComponent', () => {
  let component: InstinctCrazyContainerComponent;
  let fixture: ComponentFixture<InstinctCrazyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstinctCrazyContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstinctCrazyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
