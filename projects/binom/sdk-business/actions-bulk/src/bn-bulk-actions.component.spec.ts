import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnBulkActionsComponent } from './bn-bulk-actions.component';

describe('BnBulkActionsComponent', () => {
  let component: BnBulkActionsComponent;
  let fixture: ComponentFixture<BnBulkActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnBulkActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnBulkActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
