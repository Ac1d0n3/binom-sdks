import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkAdvertiseComponent } from './sdk-advertise.component';

describe('SdkAdvertiseComponent', () => {
  let component: SdkAdvertiseComponent;
  let fixture: ComponentFixture<SdkAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkAdvertiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
