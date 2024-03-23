import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnQuoteComponent } from './bn-quote.component';

describe('BnQuoteComponent', () => {
  let component: BnQuoteComponent;
  let fixture: ComponentFixture<BnQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
