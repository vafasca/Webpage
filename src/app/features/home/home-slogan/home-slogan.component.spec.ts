import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSloganComponent } from './home-slogan.component';

describe('HomeSloganComponent', () => {
  let component: HomeSloganComponent;
  let fixture: ComponentFixture<HomeSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSloganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
