import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowCultureComponent } from './wow-culture.component';

describe('WowCultureComponent', () => {
  let component: WowCultureComponent;
  let fixture: ComponentFixture<WowCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowCultureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
