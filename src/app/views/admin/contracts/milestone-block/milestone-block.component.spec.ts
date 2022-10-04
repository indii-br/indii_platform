import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneBlockComponent } from './milestone-block.component';

describe('MilestoneBlockComponent', () => {
  let component: MilestoneBlockComponent;
  let fixture: ComponentFixture<MilestoneBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestoneBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
