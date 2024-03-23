import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSubNavComponent } from './bn-sub-nav.component';

describe('BnSubNavComponent', () => {
  let component: BnSubNavComponent;
  let fixture: ComponentFixture<BnSubNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSubNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
