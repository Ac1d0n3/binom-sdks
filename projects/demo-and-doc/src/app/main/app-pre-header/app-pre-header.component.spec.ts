import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPreHeaderComponent } from './app-pre-header.component';

describe('AppPreHeaderComponent', () => {
  let component: AppPreHeaderComponent;
  let fixture: ComponentFixture<AppPreHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPreHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppPreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
