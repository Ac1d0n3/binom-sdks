import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnBgSliderComponent } from './bn-bg-slider.component';

describe('BnBgSliderComponent', () => {
  let component: BnBgSliderComponent;
  let fixture: ComponentFixture<BnBgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnBgSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnBgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
