import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkChartsComponent } from './sdk-charts.component';

describe('SdkChartsComponent', () => {
  let component: SdkChartsComponent;
  let fixture: ComponentFixture<SdkChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
