import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnIconSidebarItemRouterComponent } from './bn-icon-sidebar-item-router.component';

describe('BnIconSidebarItemRouterComponent', () => {
  let component: BnIconSidebarItemRouterComponent;
  let fixture: ComponentFixture<BnIconSidebarItemRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnIconSidebarItemRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnIconSidebarItemRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
