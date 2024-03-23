import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnRowTagComponent } from './bn-row-tag.component';

describe('BnRowTagComponent', () => {
  let component: BnRowTagComponent;
  let fixture: ComponentFixture<BnRowTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnRowTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnRowTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
