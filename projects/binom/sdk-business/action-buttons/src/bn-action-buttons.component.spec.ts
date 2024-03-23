import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnActionButtonsComponent } from './bn-action-buttons.component';

describe('BnActionButtonsComponent', () => {
  let component: BnActionButtonsComponent;
  let fixture: ComponentFixture<BnActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnActionButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
