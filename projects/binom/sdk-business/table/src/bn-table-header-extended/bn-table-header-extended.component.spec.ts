import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTableHeaderExtendedComponent } from './bn-table-header-extended.component';

describe('BnTableHeaderExtendedComponent', () => {
  let component: BnTableHeaderExtendedComponent;
  let fixture: ComponentFixture<BnTableHeaderExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTableHeaderExtendedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTableHeaderExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
