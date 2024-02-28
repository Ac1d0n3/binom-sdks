import { TestBed } from '@angular/core/testing';

import { SdkContentService } from './sdk-content.service';

describe('SdkContentService', () => {
  let service: SdkContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
