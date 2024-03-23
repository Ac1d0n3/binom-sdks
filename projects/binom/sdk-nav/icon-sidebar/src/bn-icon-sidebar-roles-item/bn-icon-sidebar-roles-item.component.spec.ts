import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnIconSidebarRolesItemComponent } from './bn-icon-sidebar-roles-item.component';

describe('BnIconSidebarRolesItemComponent', () => {
  let component: BnIconSidebarRolesItemComponent;
  let fixture: ComponentFixture<BnIconSidebarRolesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnIconSidebarRolesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnIconSidebarRolesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
