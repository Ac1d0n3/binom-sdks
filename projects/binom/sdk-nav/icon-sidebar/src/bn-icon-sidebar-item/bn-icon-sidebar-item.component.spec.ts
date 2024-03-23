import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnIconSidebarItemComponent } from './bn-icon-sidebar-item.component';

describe('BnIconSidebarItemComponent', () => {
  let component: BnIconSidebarItemComponent;
  let fixture: ComponentFixture<BnIconSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnIconSidebarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnIconSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
