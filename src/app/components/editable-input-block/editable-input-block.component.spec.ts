import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableInputBlockComponent } from './editable-input-block.component';

describe('EditableInputBlockComponent', () => {
  let component: EditableInputBlockComponent;
  let fixture: ComponentFixture<EditableInputBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableInputBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableInputBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
