import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnDigitalClockComponent } from './bn-digital-clock.component';

describe('BnDigitalClockComponent', () => {
  let component: BnDigitalClockComponent;
  let fixture: ComponentFixture<BnDigitalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnDigitalClockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnDigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
