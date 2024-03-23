import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnGridNavRolesItemRouterComponent } from './bn-grid-nav-roles-item-router.component';

describe('BnGridNavRolesItemRouterComponent', () => {
  let component: BnGridNavRolesItemRouterComponent;
  let fixture: ComponentFixture<BnGridNavRolesItemRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnGridNavRolesItemRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnGridNavRolesItemRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
