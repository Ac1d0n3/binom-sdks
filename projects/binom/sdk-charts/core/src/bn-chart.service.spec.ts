import { TestBed } from '@angular/core/testing';

import { BnChartService } from './bn-chart.service';

describe('BnChartService', () => {
  let service: BnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
