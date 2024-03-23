import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSubNavBasicComponent } from './bn-sub-nav-basic.component';

describe('BnSubNavBasicComponent', () => {
  let component: BnSubNavBasicComponent;
  let fixture: ComponentFixture<BnSubNavBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSubNavBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSubNavBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
