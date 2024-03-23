import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkChatComponent } from './sdk-chat.component';

describe('SdkChatComponent', () => {
  let component: SdkChatComponent;
  let fixture: ComponentFixture<SdkChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
