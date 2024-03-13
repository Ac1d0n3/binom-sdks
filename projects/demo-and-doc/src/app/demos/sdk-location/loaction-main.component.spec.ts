import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactionMainComponent } from './loaction-main.component';

describe('LoactionMainComponent', () => {
  let component: LoactionMainComponent;
  let fixture: ComponentFixture<LoactionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoactionMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoactionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
