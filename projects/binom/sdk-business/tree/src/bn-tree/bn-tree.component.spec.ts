import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTreeComponent } from './bn-tree.component';

describe('BnTreeComponent', () => {
  let component: BnTreeComponent;
  let fixture: ComponentFixture<BnTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
