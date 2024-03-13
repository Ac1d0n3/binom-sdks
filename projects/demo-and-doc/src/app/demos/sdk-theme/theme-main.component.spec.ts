import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMainComponent } from './theme-main.component';

describe('ThemeMainComponent', () => {
  let component: ThemeMainComponent;
  let fixture: ComponentFixture<ThemeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
