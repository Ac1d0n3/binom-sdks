import { TestBed } from '@angular/core/testing';

import { BnLazyImageService } from './bn-lazy-image.service';

describe('BnLazyImageService', () => {
  let service: BnLazyImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnLazyImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
