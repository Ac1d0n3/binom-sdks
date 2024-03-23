import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnChartPieNestedComponent } from './bn-chart-pie-nested.component';

describe('BnChartPieNestedComponent', () => {
  let component: BnChartPieNestedComponent;
  let fixture: ComponentFixture<BnChartPieNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnChartPieNestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnChartPieNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
