import { TestBed } from '@angular/core/testing';

import { BnParamFilterSidebarService } from './bn-param-filter-sidebar.service';

describe('BnParamFilterSidebarService', () => {
  let service: BnParamFilterSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnParamFilterSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
