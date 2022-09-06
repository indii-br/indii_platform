import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContractorInvoicesComponent } from './dash-contractor-invoices.component';

describe('DashContractorInvoicesComponent', () => {
  let component: DashContractorInvoicesComponent;
  let fixture: ComponentFixture<DashContractorInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContractorInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContractorInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
