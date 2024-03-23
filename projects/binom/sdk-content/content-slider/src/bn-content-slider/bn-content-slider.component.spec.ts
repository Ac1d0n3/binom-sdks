import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnContentSliderComponent } from './bn-content-slider.component';

describe('BnContentSliderComponent', () => {
  let component: BnContentSliderComponent;
  let fixture: ComponentFixture<BnContentSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnContentSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnContentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
