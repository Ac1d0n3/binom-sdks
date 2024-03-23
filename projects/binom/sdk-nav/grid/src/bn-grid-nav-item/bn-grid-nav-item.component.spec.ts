import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnGridNavItemComponent } from './bn-grid-nav-item.component';

describe('BnGridNavItemComponent', () => {
  let component: BnGridNavItemComponent;
  let fixture: ComponentFixture<BnGridNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnGridNavItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnGridNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
