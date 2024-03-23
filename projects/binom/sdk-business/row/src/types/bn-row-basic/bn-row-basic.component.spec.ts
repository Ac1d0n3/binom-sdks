import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowBasicComponent } from './bn-row-basic.component';

describe('BnRowBasicComponent', () => {
  let component: BnRowBasicComponent;
  let fixture: ComponentFixture<BnRowBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
