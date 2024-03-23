import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDetailedComponent } from './pie-detailed.component';

describe('PieDetailedComponent', () => {
  let component: PieDetailedComponent;
  let fixture: ComponentFixture<PieDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
