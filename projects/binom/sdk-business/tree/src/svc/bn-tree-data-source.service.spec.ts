import { TestBed } from '@angular/core/testing';

import { BnTreeDataSourceService } from './bn-tree-data-source.service';

describe('BnTreeDataSourceService', () => {
  let service: BnTreeDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnTreeDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
