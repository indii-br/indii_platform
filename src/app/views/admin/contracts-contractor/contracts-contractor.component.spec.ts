import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsContractorComponent } from './contracts-contractor.component';

describe('ContractsContractorComponent', () => {
  let component: ContractsContractorComponent;
  let fixture: ComponentFixture<ContractsContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractsContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
