import { TestBed } from '@angular/core/testing';

import { SdkNavService } from './sdk-nav.service';

describe('SdkNavService', () => {
  let service: SdkNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
