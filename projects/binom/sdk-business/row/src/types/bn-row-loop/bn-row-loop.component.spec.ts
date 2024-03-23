import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowLoopComponent } from './bn-row-loop.component';

describe('BnRowLoopComponent', () => {
  let component: BnRowLoopComponent;
  let fixture: ComponentFixture<BnRowLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowLoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
