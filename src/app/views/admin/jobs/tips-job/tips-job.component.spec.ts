import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsJobComponent } from './tips-job.component';

describe('TipsJobComponent', () => {
  let component: TipsJobComponent;
  let fixture: ComponentFixture<TipsJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
