import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneTableDataComponent } from './milestone-table-data.component';

describe('MilestoneTableDataComponent', () => {
  let component: MilestoneTableDataComponent;
  let fixture: ComponentFixture<MilestoneTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestoneTableDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
