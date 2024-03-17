import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMediaComponent } from './buttons-media.component';

describe('ButtonsMediaComponent', () => {
  let component: ButtonsMediaComponent;
  let fixture: ComponentFixture<ButtonsMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsMediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
