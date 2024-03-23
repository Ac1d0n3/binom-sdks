import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSettingsMenuStackedComponent } from './bn-settings-menu-stacked.component';

describe('BnSettingsMenuStackedComponent', () => {
  let component: BnSettingsMenuStackedComponent;
  let fixture: ComponentFixture<BnSettingsMenuStackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSettingsMenuStackedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSettingsMenuStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
