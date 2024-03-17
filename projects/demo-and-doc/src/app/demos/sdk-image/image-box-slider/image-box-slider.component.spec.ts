import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBoxSliderComponent } from './image-box-slider.component';

describe('ImageBoxSliderComponent', () => {
  let component: ImageBoxSliderComponent;
  let fixture: ComponentFixture<ImageBoxSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBoxSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageBoxSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
