import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkNavComponent } from './sdk-nav.component';

describe('SdkNavComponent', () => {
  let component: SdkNavComponent;
  let fixture: ComponentFixture<SdkNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
