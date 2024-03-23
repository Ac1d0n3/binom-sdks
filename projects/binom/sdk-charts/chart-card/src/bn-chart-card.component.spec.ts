import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnChartCardComponent } from './bn-chart-card.component';

describe('BnChartCardComponent', () => {
  let component: BnChartCardComponent;
  let fixture: ComponentFixture<BnChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnChartCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
