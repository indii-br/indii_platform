import { TestBed } from '@angular/core/testing';

import { WepayoutService } from './wepayout.service';

describe('WepayoutService', () => {
  let service: WepayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WepayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
