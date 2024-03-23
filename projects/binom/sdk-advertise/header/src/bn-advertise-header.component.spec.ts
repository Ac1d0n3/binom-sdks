import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnAdvertiseHeaderComponent } from './bn-advertise-header.component';

describe('BnAdvertiseHeaderComponent', () => {
  let component: BnAdvertiseHeaderComponent;
  let fixture: ComponentFixture<BnAdvertiseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnAdvertiseHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnAdvertiseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
