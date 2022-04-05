import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInvoicesComponent } from './dash-invoices.component';

describe('DashInvoicesComponent', () => {
  let component: DashInvoicesComponent;
  let fixture: ComponentFixture<DashInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
