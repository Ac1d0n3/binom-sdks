import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleMainComponent } from './bundle-main.component';

describe('BundleMainComponent', () => {
  let component: BundleMainComponent;
  let fixture: ComponentFixture<BundleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
