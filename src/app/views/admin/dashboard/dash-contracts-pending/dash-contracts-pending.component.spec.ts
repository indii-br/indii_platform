import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContractsPendingComponent } from './dash-contracts-pending.component';

describe('DashContractsPendingComponent', () => {
  let component: DashContractsPendingComponent;
  let fixture: ComponentFixture<DashContractsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContractsPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContractsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
