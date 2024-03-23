import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowSelectComponent } from './bn-row-select.component';

describe('BnRowSelectComponent', () => {
  let component: BnRowSelectComponent;
  let fixture: ComponentFixture<BnRowSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
