import { TestBed } from '@angular/core/testing';

import { BnTableService } from './bn-table.service';

describe('BnTableService', () => {
  let service: BnTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
