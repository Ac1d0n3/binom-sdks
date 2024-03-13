import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismMainComponent } from './prism-main.component';

describe('PrismMainComponent', () => {
  let component: PrismMainComponent;
  let fixture: ComponentFixture<PrismMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrismMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
