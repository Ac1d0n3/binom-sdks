import { TestBed } from '@angular/core/testing';

import { BnTableDataSourceService } from './bn-table-data-source.service';

describe('BnTableDataSourceService', () => {
  let service: BnTableDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnTableDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
