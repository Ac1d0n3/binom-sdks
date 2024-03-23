import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTableBulkEditComponent } from './bn-table-bulk-edit.component';

describe('BnTableBulkEditComponent', () => {
  let component: BnTableBulkEditComponent;
  let fixture: ComponentFixture<BnTableBulkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTableBulkEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTableBulkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
