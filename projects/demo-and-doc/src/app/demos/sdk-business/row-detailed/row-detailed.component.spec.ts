import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailedComponent } from './row-detailed.component';

describe('RowDetailedComponent', () => {
  let component: RowDetailedComponent;
  let fixture: ComponentFixture<RowDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
