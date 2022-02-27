import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAppliedComponent } from './profile-applied.component';

describe('ProfileAppliedComponent', () => {
  let component: ProfileAppliedComponent;
  let fixture: ComponentFixture<ProfileAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAppliedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
