import { TestBed } from '@angular/core/testing';

import { SdkAdvertiseService } from './sdk-advertise.service';

describe('SdkAdvertiseService', () => {
  let service: SdkAdvertiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkAdvertiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
