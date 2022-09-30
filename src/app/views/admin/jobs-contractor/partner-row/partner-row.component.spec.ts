import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerRowComponent } from './partner-row.component';

describe('PartnerRowComponent', () => {
  let component: PartnerRowComponent;
  let fixture: ComponentFixture<PartnerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
