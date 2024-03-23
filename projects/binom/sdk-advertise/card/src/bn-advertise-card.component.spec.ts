import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnAdvertiseCardComponent } from './bn-advertise-card.component';

describe('BnAdvertiseCardComponent', () => {
  let component: BnAdvertiseCardComponent;
  let fixture: ComponentFixture<BnAdvertiseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnAdvertiseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnAdvertiseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
