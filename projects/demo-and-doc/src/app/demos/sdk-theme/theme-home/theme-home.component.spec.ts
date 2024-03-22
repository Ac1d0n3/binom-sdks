import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeHomeComponent } from './theme-home.component';

describe('ThemeHomeComponent', () => {
  let component: ThemeHomeComponent;
  let fixture: ComponentFixture<ThemeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
