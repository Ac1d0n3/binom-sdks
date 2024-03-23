import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowImageComponent } from './bn-row-image.component';

describe('BnRowImageComponent', () => {
  let component: BnRowImageComponent;
  let fixture: ComponentFixture<BnRowImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
