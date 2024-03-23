import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieNestedComponent } from './pie-nested.component';

describe('PieNestedComponent', () => {
  let component: PieNestedComponent;
  let fixture: ComponentFixture<PieNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieNestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
