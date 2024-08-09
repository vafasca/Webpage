import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartialTalentProgramComponent } from './home-partial-talent-program.component';

describe('HomePartialTalentProgramComponent', () => {
  let component: HomePartialTalentProgramComponent;
  let fixture: ComponentFixture<HomePartialTalentProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartialTalentProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartialTalentProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
