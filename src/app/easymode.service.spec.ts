import { TestBed } from '@angular/core/testing';

import { EasymodeService } from './easymode.service';

describe('EasymodeService', () => {
  let service: EasymodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasymodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
