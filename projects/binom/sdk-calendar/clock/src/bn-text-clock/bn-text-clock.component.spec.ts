import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTextClockComponent } from './bn-text-clock.component';

describe('BnTextClockComponent', () => {
  let component: BnTextClockComponent;
  let fixture: ComponentFixture<BnTextClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTextClockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTextClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
