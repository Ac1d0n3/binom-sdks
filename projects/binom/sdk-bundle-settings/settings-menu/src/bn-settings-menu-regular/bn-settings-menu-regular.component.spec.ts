import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSettingsMenuRegularComponent } from './bn-settings-menu-regular.component';

describe('BnSettingsMenuRegularComponent', () => {
  let component: BnSettingsMenuRegularComponent;
  let fixture: ComponentFixture<BnSettingsMenuRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSettingsMenuRegularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSettingsMenuRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
