import { TestBed } from '@angular/core/testing';

import { SingleMobileService } from './single-mobile.service';

describe('SingleMobileService', () => {
  let service: SingleMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
