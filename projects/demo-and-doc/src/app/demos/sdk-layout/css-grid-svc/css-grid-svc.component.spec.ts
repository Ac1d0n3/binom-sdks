import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridSvcComponent } from './css-grid-svc.component';

describe('CssGridSvcComponent', () => {
  let component: CssGridSvcComponent;
  let fixture: ComponentFixture<CssGridSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssGridSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssGridSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
