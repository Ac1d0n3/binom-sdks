import { TestBed } from '@angular/core/testing';

import { SdkChatService } from './sdk-chat.service';

describe('SdkChatService', () => {
  let service: SdkChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdkChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
