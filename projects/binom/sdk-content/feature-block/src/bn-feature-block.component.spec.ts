import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnFeatureBlockComponent } from './bn-feature-block.component';

describe('BnFeatureBlockComponent', () => {
  let component: BnFeatureBlockComponent;
  let fixture: ComponentFixture<BnFeatureBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnFeatureBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnFeatureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
