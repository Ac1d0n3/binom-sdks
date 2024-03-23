import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTableConfirmComponent } from './bn-table-confirm.component';

describe('BnTableConfirmComponent', () => {
  let component: BnTableConfirmComponent;
  let fixture: ComponentFixture<BnTableConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTableConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTableConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
