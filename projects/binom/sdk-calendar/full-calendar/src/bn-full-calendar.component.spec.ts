import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnFullCalendarComponent } from './bn-full-calendar.component';

describe('BnFullCalendarComponent', () => {
  let component: BnFullCalendarComponent;
  let fixture: ComponentFixture<BnFullCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnFullCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnFullCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
