import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFullComponent } from './calendar-full.component';

describe('CalendarFullComponent', () => {
  let component: CalendarFullComponent;
  let fixture: ComponentFixture<CalendarFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
