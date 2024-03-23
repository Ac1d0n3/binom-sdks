import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnMenuActionsComponent } from './bn-menu-actions.component';

describe('BnMenuActionsComponent', () => {
  let component: BnMenuActionsComponent;
  let fixture: ComponentFixture<BnMenuActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnMenuActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnMenuActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
