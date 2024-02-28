import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnImageStripeComponent } from './bn-image-stripe.component';

describe('BnImageStripeComponent', () => {
  let component: BnImageStripeComponent;
  let fixture: ComponentFixture<BnImageStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnImageStripeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnImageStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
