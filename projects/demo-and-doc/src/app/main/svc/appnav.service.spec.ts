import { TestBed } from '@angular/core/testing';

import { AppnavService } from './appnav.service';

describe('AppnavService', () => {
  let service: AppnavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppnavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
