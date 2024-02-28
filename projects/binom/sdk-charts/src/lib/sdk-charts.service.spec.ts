import { TestBed } from '@angular/core/testing';

import { SdkChartsService } from './sdk-charts.service';

describe('SdkChartsService', () => {
  let service: SdkChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
