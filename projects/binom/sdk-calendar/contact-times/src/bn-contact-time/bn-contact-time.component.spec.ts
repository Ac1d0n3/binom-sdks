import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnContactTimeComponent } from './bn-contact-time.component';

describe('BnContactTimeComponent', () => {
  let component: BnContactTimeComponent;
  let fixture: ComponentFixture<BnContactTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnContactTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnContactTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
