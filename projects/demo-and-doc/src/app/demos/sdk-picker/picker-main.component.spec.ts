import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerMainComponent } from './picker-main.component';

describe('PickerMainComponent', () => {
  let component: PickerMainComponent;
  let fixture: ComponentFixture<PickerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickerMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
