import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParalaxComponent } from './home-paralax.component';

describe('HomeParalaxComponent', () => {
  let component: HomeParalaxComponent;
  let fixture: ComponentFixture<HomeParalaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParalaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeParalaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
