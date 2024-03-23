import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnGridNavComponent } from './bn-grid-nav.component';

describe('BnGridNavComponent', () => {
  let component: BnGridNavComponent;
  let fixture: ComponentFixture<BnGridNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnGridNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnGridNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
