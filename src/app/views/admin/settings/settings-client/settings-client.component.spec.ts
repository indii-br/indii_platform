import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsClientComponent } from './settings-client.component';

describe('SettingsClientComponent', () => {
  let component: SettingsClientComponent;
  let fixture: ComponentFixture<SettingsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
