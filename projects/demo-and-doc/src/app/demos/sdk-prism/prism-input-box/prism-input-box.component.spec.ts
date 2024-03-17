import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismInputBoxComponent } from './prism-input-box.component';

describe('PrismInputBoxComponent', () => {
  let component: PrismInputBoxComponent;
  let fixture: ComponentFixture<PrismInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismInputBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrismInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
