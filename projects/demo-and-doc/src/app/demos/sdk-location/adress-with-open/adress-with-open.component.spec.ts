import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressWithOpenComponent } from './adress-with-open.component';

describe('AdressWithOpenComponent', () => {
  let component: AdressWithOpenComponent;
  let fixture: ComponentFixture<AdressWithOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdressWithOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdressWithOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
