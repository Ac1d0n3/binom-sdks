import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseHomeComponent } from './advertise-home.component';

describe('AdvertiseHomeComponent', () => {
  let component: AdvertiseHomeComponent;
  let fixture: ComponentFixture<AdvertiseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertiseHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertiseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
