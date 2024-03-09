import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkHeaderComponent } from './sdk-header.component';

describe('SdkHeaderComponent', () => {
  let component: SdkHeaderComponent;
  let fixture: ComponentFixture<SdkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
