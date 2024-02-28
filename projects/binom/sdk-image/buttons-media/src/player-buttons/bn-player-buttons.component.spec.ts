import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPlayerButtonsComponent } from './bn-player-buttons.component';

describe('BnPlayerButtonsComponent', () => {
  let component: BnPlayerButtonsComponent;
  let fixture: ComponentFixture<BnPlayerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnPlayerButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnPlayerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
