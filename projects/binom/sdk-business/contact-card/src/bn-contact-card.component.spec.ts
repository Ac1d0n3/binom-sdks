import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnContactCardComponent } from './bn-contact-card.component';

describe('BnContactCardComponent', () => {
  let component: BnContactCardComponent;
  let fixture: ComponentFixture<BnContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnContactCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
