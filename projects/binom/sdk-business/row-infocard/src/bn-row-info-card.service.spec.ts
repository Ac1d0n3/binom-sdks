import { TestBed } from '@angular/core/testing';

import { BnRowInfoCardService } from './bn-row-info-card.service';

describe('BnRowInfoCardService', () => {
  let service: BnRowInfoCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnRowInfoCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
