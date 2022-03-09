import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadContractBlockComponent } from './upload-contract-block.component';

describe('UploadContractBlockComponent', () => {
  let component: UploadContractBlockComponent;
  let fixture: ComponentFixture<UploadContractBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadContractBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadContractBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
