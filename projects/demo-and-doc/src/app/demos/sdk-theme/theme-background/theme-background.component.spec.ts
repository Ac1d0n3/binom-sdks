import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBackgroundComponent } from './theme-background.component';

describe('ThemeBackgroundComponent', () => {
  let component: ThemeBackgroundComponent;
  let fixture: ComponentFixture<ThemeBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
