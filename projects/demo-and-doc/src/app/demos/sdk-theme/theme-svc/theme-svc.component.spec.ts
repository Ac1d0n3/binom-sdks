import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSvcComponent } from './theme-svc.component';

describe('ThemeSvcComponent', () => {
  let component: ThemeSvcComponent;
  let fixture: ComponentFixture<ThemeSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
