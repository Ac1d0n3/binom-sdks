import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnContentSliderItemComponent } from './bn-content-slider-item.component';

describe('BnContentSliderItemComponent', () => {
  let component: BnContentSliderItemComponent;
  let fixture: ComponentFixture<BnContentSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnContentSliderItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnContentSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
