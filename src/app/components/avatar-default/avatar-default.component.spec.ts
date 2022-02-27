import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDefaultComponent } from './avatar-default.component';

describe('AvatarDefaultComponent', () => {
  let component: AvatarDefaultComponent;
  let fixture: ComponentFixture<AvatarDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
