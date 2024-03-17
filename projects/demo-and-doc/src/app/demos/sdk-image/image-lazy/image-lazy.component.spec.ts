import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLazyComponent } from './image-lazy.component';

describe('ImageLazyComponent', () => {
  let component: ImageLazyComponent;
  let fixture: ComponentFixture<ImageLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLazyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
