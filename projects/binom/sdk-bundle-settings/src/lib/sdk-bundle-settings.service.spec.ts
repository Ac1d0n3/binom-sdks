import { TestBed } from '@angular/core/testing';

import { SdkBundleSettingsService } from './sdk-bundle-settings.service';

describe('SdkBundleSettingsService', () => {
  let service: SdkBundleSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkBundleSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
