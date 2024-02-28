import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnViewDayComponent } from './bn-view-day.component';

describe('BnViewDayComponent', () => {
  let component: BnViewDayComponent;
  let fixture: ComponentFixture<BnViewDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnViewDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnViewDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
