import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsContractorComponent } from './jobs-contractor.component';

describe('JobsContractorComponent', () => {
  let component: JobsContractorComponent;
  let fixture: ComponentFixture<JobsContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
