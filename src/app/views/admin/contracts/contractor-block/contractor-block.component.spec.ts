import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorBlockComponent } from './contractor-block.component';

describe('ContractorBlockComponent', () => {
  let component: ContractorBlockComponent;
  let fixture: ComponentFixture<ContractorBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
