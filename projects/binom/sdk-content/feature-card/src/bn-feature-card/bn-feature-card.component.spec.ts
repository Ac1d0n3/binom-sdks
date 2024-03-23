import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnFeatureCardComponent } from './bn-feature-card.component';

describe('BnFeatureCardComponent', () => {
  let component: BnFeatureCardComponent;
  let fixture: ComponentFixture<BnFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnFeatureCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
