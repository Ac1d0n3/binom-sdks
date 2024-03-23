import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnChartPieDetailedComponent } from './bn-chart-pie-detailed.component';

describe('BnChartPieDetailedComponent', () => {
  let component: BnChartPieDetailedComponent;
  let fixture: ComponentFixture<BnChartPieDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnChartPieDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnChartPieDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
