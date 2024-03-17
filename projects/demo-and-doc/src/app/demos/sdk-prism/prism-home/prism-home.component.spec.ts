import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismHomeComponent } from './prism-home.component';

describe('PrismHomeComponent', () => {
  let component: PrismHomeComponent;
  let fixture: ComponentFixture<PrismHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrismHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
