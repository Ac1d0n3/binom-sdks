import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationMainComponent } from './animation-main.component';

describe('AnimationMainComponent', () => {
  let component: AnimationMainComponent;
  let fixture: ComponentFixture<AnimationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
