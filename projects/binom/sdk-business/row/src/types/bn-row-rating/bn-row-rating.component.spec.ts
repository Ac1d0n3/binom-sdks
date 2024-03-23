import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowRatingComponent } from './bn-row-rating.component';

describe('BnRowRatingComponent', () => {
  let component: BnRowRatingComponent;
  let fixture: ComponentFixture<BnRowRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
