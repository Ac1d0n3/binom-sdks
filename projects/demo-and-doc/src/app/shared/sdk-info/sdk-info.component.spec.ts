import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkInfoComponent } from './sdk-info.component';

describe('SdkInfoComponent', () => {
  let component: SdkInfoComponent;
  let fixture: ComponentFixture<SdkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
