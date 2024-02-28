import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnContactTimeSmallComponent } from './bn-contact-time-small.component';

describe('BnContactTimeSmallComponent', () => {
  let component: BnContactTimeSmallComponent;
  let fixture: ComponentFixture<BnContactTimeSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnContactTimeSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnContactTimeSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
