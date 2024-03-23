import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSubNavMenuItemComponent } from './bn-sub-nav-menu-item.component';

describe('BnSubNavMenuItemComponent', () => {
  let component: BnSubNavMenuItemComponent;
  let fixture: ComponentFixture<BnSubNavMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSubNavMenuItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSubNavMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
