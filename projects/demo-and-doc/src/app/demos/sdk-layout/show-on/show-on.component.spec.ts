import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnComponent } from './show-on.component';

describe('ShowOnComponent', () => {
  let component: ShowOnComponent;
  let fixture: ComponentFixture<ShowOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
