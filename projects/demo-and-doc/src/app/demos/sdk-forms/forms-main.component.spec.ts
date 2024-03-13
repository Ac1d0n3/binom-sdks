import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMainComponent } from './forms-main.component';

describe('FormsMainComponent', () => {
  let component: FormsMainComponent;
  let fixture: ComponentFixture<FormsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
