import { TestBed } from '@angular/core/testing';

import { SdkFilesService } from './sdk-files.service';

describe('SdkFilesService', () => {
  let service: SdkFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
