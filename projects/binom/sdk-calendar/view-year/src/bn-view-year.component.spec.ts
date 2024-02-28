import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnViewYearComponent } from './bn-view-year.component';

describe('BnViewYearComponent', () => {
  let component: BnViewYearComponent;
  let fixture: ComponentFixture<BnViewYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnViewYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnViewYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
