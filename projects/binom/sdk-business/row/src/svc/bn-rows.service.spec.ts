import { TestBed } from '@angular/core/testing';

import { BnRowsService } from './bn-rows.service';

describe('BnRowsService', () => {
  let service: BnRowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnRowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
