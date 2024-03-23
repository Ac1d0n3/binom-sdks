import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSvcComponent } from './chart-svc.component';

describe('ChartSvcComponent', () => {
  let component: ChartSvcComponent;
  let fixture: ComponentFixture<ChartSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
