import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTimeTableComponent } from './bn-time-table.component';

describe('BnTimeTableComponent', () => {
  let component: BnTimeTableComponent;
  let fixture: ComponentFixture<BnTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTimeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
