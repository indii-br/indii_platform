import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsBillComponent } from './view-details-bill.component';

describe('ViewDetailsBillComponent', () => {
  let component: ViewDetailsBillComponent;
  let fixture: ComponentFixture<ViewDetailsBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
