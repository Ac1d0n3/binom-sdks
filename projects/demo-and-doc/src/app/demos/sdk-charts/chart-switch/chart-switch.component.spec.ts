import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSwitchComponent } from './chart-switch.component';

describe('ChartSwitchComponent', () => {
  let component: ChartSwitchComponent;
  let fixture: ComponentFixture<ChartSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
