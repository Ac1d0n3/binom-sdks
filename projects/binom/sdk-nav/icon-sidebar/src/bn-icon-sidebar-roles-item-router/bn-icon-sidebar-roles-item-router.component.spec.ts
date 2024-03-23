import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnIconSidebarRolesItemRouterComponent } from './bn-icon-sidebar-roles-item-router.component';

describe('BnIconSidebarRolesItemRouterComponent', () => {
  let component: BnIconSidebarRolesItemRouterComponent;
  let fixture: ComponentFixture<BnIconSidebarRolesItemRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnIconSidebarRolesItemRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnIconSidebarRolesItemRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
