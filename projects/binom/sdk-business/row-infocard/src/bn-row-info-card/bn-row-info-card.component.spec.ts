import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowInfoCardComponent } from './bn-row-info-card.component';

describe('BnRowInfoCardComponent', () => {
  let component: BnRowInfoCardComponent;
  let fixture: ComponentFixture<BnRowInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
