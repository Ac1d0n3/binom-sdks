import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowDetailedComponent } from './bn-row-detailed.component';

describe('BnRowDetailedComponent', () => {
  let component: BnRowDetailedComponent;
  let fixture: ComponentFixture<BnRowDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowDetailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
