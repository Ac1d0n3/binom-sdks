import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMainComponent } from './core-main.component';
import { RouterOutlet } from '@angular/router';

describe('CoreMainComponent', () => {
  let component: CoreMainComponent;
  let fixture: ComponentFixture<CoreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreMainComponent, RouterOutlet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
