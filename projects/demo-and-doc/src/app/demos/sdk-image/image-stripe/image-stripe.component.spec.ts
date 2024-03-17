import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStripeComponent } from './image-stripe.component';

describe('ImageStripeComponent', () => {
  let component: ImageStripeComponent;
  let fixture: ComponentFixture<ImageStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageStripeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
