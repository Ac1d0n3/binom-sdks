import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowComponent } from './bn-row.component';

describe('BnRowComponent', () => {
  let component: BnRowComponent;
  let fixture: ComponentFixture<BnRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
