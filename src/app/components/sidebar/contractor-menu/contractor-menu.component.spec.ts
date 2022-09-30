import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorMenuComponent } from './contractor-menu.component';

describe('ContractorMenuComponent', () => {
  let component: ContractorMenuComponent;
  let fixture: ComponentFixture<ContractorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
