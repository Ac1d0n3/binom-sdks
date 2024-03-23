import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLoopComponent } from './icon-loop.component';

describe('IconLoopComponent', () => {
  let component: IconLoopComponent;
  let fixture: ComponentFixture<IconLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
