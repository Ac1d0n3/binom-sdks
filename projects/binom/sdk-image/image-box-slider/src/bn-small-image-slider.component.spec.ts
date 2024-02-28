import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSmallImageSliderComponent } from './bn-small-image-slider.component';

describe('BnSmallImageSliderComponent', () => {
  let component: BnSmallImageSliderComponent;
  let fixture: ComponentFixture<BnSmallImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnSmallImageSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnSmallImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
