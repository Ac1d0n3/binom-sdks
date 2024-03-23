import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnGridNavItemRouterComponent } from './bn-grid-nav-item-router.component';

describe('BnGridNavItemRouterComponent', () => {
  let component: BnGridNavItemRouterComponent;
  let fixture: ComponentFixture<BnGridNavItemRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnGridNavItemRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnGridNavItemRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
