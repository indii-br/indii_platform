import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablePainelComponent } from './editable-painel.component';

describe('EditablePainelComponent', () => {
  let component: EditablePainelComponent;
  let fixture: ComponentFixture<EditablePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditablePainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
