import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnTabNavComponent } from './bn-tab-nav.component';

describe('BnTabNavComponent', () => {
  let component: BnTabNavComponent;
  let fixture: ComponentFixture<BnTabNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnTabNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnTabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
