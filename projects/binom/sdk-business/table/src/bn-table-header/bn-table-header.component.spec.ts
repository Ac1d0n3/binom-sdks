import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTableHeaderComponent } from './bn-table-header.component';

describe('BnTableHeaderComponent', () => {
  let component: BnTableHeaderComponent;
  let fixture: ComponentFixture<BnTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTableHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
