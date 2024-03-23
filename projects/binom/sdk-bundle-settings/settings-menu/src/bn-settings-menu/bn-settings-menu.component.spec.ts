import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSettingsMenuComponent } from './bn-settings-menu.component';

describe('BnSettingsMenuComponent', () => {
  let component: BnSettingsMenuComponent;
  let fixture: ComponentFixture<BnSettingsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSettingsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSettingsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
