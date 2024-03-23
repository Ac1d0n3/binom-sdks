import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTabNavSecuredComponent } from './bn-tab-nav-secured.component';

describe('BnTabNavSecuredComponent', () => {
  let component: BnTabNavSecuredComponent;
  let fixture: ComponentFixture<BnTabNavSecuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTabNavSecuredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTabNavSecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
