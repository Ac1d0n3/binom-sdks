import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSvcComponent } from './calendar-svc.component';

describe('CalendarSvcComponent', () => {
  let component: CalendarSvcComponent;
  let fixture: ComponentFixture<CalendarSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
