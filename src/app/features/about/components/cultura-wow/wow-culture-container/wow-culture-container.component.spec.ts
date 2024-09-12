import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowCultureContainerComponent } from './wow-culture-container.component';

describe('WowCultureContainerComponent', () => {
  let component: WowCultureContainerComponent;
  let fixture: ComponentFixture<WowCultureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowCultureContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowCultureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
