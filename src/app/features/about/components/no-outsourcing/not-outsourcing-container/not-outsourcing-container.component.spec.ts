import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotOutsourcingContainerComponent } from './not-outsourcing-container.component';

describe('NotOutsourcingContainerComponent', () => {
  let component: NotOutsourcingContainerComponent;
  let fixture: ComponentFixture<NotOutsourcingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotOutsourcingContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotOutsourcingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
