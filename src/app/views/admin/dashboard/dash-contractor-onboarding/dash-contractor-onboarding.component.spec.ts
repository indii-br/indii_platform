import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContractorOnboardingComponent } from './dash-contractor-onboarding.component';

describe('DashContractorOnboardingComponent', () => {
  let component: DashContractorOnboardingComponent;
  let fixture: ComponentFixture<DashContractorOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContractorOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContractorOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
