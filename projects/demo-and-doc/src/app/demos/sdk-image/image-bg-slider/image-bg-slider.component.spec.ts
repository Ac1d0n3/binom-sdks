import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBgSliderComponent } from './image-bg-slider.component';

describe('ImageBgSliderComponent', () => {
  let component: ImageBgSliderComponent;
  let fixture: ComponentFixture<ImageBgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBgSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageBgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
