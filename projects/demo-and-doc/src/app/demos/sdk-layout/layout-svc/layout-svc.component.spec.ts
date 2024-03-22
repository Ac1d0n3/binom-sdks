import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSvcComponent } from './layout-svc.component';

describe('LayoutSvcComponent', () => {
  let component: LayoutSvcComponent;
  let fixture: ComponentFixture<LayoutSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
