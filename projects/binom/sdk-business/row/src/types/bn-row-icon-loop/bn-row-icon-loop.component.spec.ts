import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowIconLoopComponent } from './bn-row-icon-loop.component';

describe('BnRowIconLoopComponent', () => {
  let component: BnRowIconLoopComponent;
  let fixture: ComponentFixture<BnRowIconLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowIconLoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowIconLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
