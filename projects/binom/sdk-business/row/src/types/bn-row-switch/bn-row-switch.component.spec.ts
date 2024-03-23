import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowSwitchComponent } from './bn-row-switch.component';

describe('BnRowSwitchComponent', () => {
  let component: BnRowSwitchComponent;
  let fixture: ComponentFixture<BnRowSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
