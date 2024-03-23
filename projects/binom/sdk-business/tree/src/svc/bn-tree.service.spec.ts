import { TestBed } from '@angular/core/testing';

import { BnTreeService } from './bn-tree.service';

describe('BnTreeService', () => {
  let service: BnTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
