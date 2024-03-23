import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkSocialComponent } from './sdk-social.component';

describe('SdkSocialComponent', () => {
  let component: SdkSocialComponent;
  let fixture: ComponentFixture<SdkSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkSocialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
