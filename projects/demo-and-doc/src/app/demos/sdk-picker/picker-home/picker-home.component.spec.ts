import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerHomeComponent } from './picker-home.component';

describe('PickerHomeComponent', () => {
  let component: PickerHomeComponent;
  let fixture: ComponentFixture<PickerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickerHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
