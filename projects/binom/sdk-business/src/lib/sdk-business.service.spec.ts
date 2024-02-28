import { TestBed } from '@angular/core/testing';

import { SdkBusinessService } from './sdk-business.service';

describe('SdkBusinessService', () => {
  let service: SdkBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
