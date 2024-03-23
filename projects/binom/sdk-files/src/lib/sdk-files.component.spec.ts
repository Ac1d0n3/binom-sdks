import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkFilesComponent } from './sdk-files.component';

describe('SdkFilesComponent', () => {
  let component: SdkFilesComponent;
  let fixture: ComponentFixture<SdkFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
