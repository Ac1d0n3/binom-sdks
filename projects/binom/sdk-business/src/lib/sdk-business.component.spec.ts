import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkBusinessComponent } from './sdk-business.component';

describe('SdkBusinessComponent', () => {
  let component: SdkBusinessComponent;
  let fixture: ComponentFixture<SdkBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
