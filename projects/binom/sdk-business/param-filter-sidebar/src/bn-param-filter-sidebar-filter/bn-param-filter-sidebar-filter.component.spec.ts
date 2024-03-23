import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnParamFilterSidebarFilterComponent } from './bn-param-filter-sidebar-filter.component';

describe('BnParamFilterSidebarFilterComponent', () => {
  let component: BnParamFilterSidebarFilterComponent;
  let fixture: ComponentFixture<BnParamFilterSidebarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnParamFilterSidebarFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnParamFilterSidebarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
