import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAppliesComponent } from './dash-applies.component';

describe('DashAppliesComponent', () => {
  let component: DashAppliesComponent;
  let fixture: ComponentFixture<DashAppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
