import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnExifInfoComponent } from './bn-exif-info.component';

describe('BnExifInfoComponent', () => {
  let component: BnExifInfoComponent;
  let fixture: ComponentFixture<BnExifInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnExifInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnExifInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
