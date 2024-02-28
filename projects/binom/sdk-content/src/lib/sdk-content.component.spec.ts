import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkContentComponent } from './sdk-content.component';

describe('SdkContentComponent', () => {
  let component: SdkContentComponent;
  let fixture: ComponentFixture<SdkContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
