import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTimesComponent } from './contact-times.component';

describe('ContactTimesComponent', () => {
  let component: ContactTimesComponent;
  let fixture: ComponentFixture<ContactTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
