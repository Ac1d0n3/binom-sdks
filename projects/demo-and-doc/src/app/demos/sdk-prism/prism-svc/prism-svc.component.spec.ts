import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismSvcComponent } from './prism-svc.component';

describe('PrismSvcComponent', () => {
  let component: PrismSvcComponent;
  let fixture: ComponentFixture<PrismSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrismSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
