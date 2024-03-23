import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnParamFilterSidebarHeaderComponent } from './bn-param-filter-sidebar-header.component';

describe('BnParamFilterSidebarHeaderComponent', () => {
  let component: BnParamFilterSidebarHeaderComponent;
  let fixture: ComponentFixture<BnParamFilterSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnParamFilterSidebarHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnParamFilterSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
