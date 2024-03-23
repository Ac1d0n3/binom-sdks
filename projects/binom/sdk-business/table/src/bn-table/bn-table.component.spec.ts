import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTableComponent } from './bn-table.component';

describe('BnTableComponent', () => {
  let component: BnTableComponent;
  let fixture: ComponentFixture<BnTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
