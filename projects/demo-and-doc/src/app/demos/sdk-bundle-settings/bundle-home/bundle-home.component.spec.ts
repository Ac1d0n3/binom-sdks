import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleHomeComponent } from './bundle-home.component';

describe('BundleHomeComponent', () => {
  let component: BundleHomeComponent;
  let fixture: ComponentFixture<BundleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
