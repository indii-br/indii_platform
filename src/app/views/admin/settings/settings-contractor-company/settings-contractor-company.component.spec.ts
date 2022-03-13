import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContractorCompanyComponent } from './settings-contractor-company.component';

describe('SettingsContractorCompanyComponent', () => {
  let component: SettingsContractorCompanyComponent;
  let fixture: ComponentFixture<SettingsContractorCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsContractorCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsContractorCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
