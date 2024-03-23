import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnAdvertiseListComponent } from './bn-advertise-list.component';

describe('BnAdvertiseListComponent', () => {
  let component: BnAdvertiseListComponent;
  let fixture: ComponentFixture<BnAdvertiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnAdvertiseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnAdvertiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
