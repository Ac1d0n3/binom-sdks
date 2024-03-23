import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnAddressBookComponent } from './bn-address-book.component';

describe('BnAddressBookComponent', () => {
  let component: BnAddressBookComponent;
  let fixture: ComponentFixture<BnAddressBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnAddressBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
