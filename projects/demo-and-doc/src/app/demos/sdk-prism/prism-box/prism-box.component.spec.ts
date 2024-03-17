import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismBoxComponent } from './prism-box.component';

describe('PrismBoxComponent', () => {
  let component: PrismBoxComponent;
  let fixture: ComponentFixture<PrismBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrismBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
