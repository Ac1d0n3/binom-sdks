import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnViewWeekComponent } from './bn-view-week.component';

describe('BnViewWeekComponent', () => {
  let component: BnViewWeekComponent;
  let fixture: ComponentFixture<BnViewWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnViewWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnViewWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
