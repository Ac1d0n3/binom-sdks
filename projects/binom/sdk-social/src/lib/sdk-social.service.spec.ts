import { TestBed } from '@angular/core/testing';

import { SdkSocialService } from './sdk-social.service';

describe('SdkSocialService', () => {
  let service: SdkSocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkSocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
