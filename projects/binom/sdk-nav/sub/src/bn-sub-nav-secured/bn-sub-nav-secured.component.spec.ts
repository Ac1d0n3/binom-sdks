import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSubNavSecuredComponent } from './bn-sub-nav-secured.component';

describe('BnSubNavSecuredComponent', () => {
  let component: BnSubNavSecuredComponent;
  let fixture: ComponentFixture<BnSubNavSecuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSubNavSecuredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSubNavSecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
