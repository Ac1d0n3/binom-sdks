import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSettingsSidbarComponent } from './bn-settings-sidbar.component';

describe('BnSettingsSidbarComponent', () => {
  let component: BnSettingsSidbarComponent;
  let fixture: ComponentFixture<BnSettingsSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSettingsSidbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSettingsSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
