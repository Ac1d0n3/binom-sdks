import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowLinkComponent } from './bn-row-link.component';

describe('BnRowLinkComponent', () => {
  let component: BnRowLinkComponent;
  let fixture: ComponentFixture<BnRowLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
