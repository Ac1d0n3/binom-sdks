import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTreeFlatComponent } from './bn-tree-flat.component';

describe('BnTreeFlatComponent', () => {
  let component: BnTreeFlatComponent;
  let fixture: ComponentFixture<BnTreeFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTreeFlatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTreeFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
