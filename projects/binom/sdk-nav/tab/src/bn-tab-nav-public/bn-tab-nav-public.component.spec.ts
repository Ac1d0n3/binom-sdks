import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTabNavPublicComponent } from './bn-tab-nav-public.component';

describe('BnTabNavPublicComponent', () => {
  let component: BnTabNavPublicComponent;
  let fixture: ComponentFixture<BnTabNavPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTabNavPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTabNavPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
