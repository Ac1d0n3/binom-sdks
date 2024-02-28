import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnViewMonthComponent } from './bn-view-month.component';

describe('BnViewMonthComponent', () => {
  let component: BnViewMonthComponent;
  let fixture: ComponentFixture<BnViewMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnViewMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnViewMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
