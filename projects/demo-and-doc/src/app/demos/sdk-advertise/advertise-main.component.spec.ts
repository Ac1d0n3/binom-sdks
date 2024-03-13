import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseMainComponent } from './advertise-main.component';

describe('AdvertiseMainComponent', () => {
  let component: AdvertiseMainComponent;
  let fixture: ComponentFixture<AdvertiseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertiseMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertiseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
