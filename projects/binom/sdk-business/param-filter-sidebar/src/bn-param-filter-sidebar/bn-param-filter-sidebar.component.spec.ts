import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnParamFilterSidebarComponent } from './bn-param-filter-sidebar.component';

describe('BnParamFilterSidebarComponent', () => {
  let component: BnParamFilterSidebarComponent;
  let fixture: ComponentFixture<BnParamFilterSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnParamFilterSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnParamFilterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
