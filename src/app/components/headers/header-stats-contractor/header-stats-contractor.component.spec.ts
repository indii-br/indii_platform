import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStatsContractorComponent } from './header-stats-contractor.component';

describe('HeaderStatsContractorComponent', () => {
  let component: HeaderStatsContractorComponent;
  let fixture: ComponentFixture<HeaderStatsContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderStatsContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStatsContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
