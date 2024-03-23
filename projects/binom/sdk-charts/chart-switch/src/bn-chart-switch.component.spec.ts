import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnChartSwitchComponent } from './bn-chart-switch.component';

describe('BnChartSwitchComponent', () => {
  let component: BnChartSwitchComponent;
  let fixture: ComponentFixture<BnChartSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnChartSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnChartSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
