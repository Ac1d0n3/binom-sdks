import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTreeNestedComponent } from './bn-tree-nested.component';

describe('BnTreeNestedComponent', () => {
  let component: BnTreeNestedComponent;
  let fixture: ComponentFixture<BnTreeNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTreeNestedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTreeNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
