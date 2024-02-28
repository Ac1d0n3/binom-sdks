import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkBundleSettingsComponent } from './sdk-bundle-settings.component';

describe('SdkBundleSettingsComponent', () => {
  let component: SdkBundleSettingsComponent;
  let fixture: ComponentFixture<SdkBundleSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkBundleSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkBundleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
