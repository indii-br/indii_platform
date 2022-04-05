import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHolidaysComponent } from './dash-holidays.component';

describe('DashHolidaysComponent', () => {
  let component: DashHolidaysComponent;
  let fixture: ComponentFixture<DashHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHolidaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
