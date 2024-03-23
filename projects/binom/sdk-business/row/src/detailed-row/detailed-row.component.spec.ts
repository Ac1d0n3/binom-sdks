import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRowComponent } from './detailed-row.component';

describe('DetailedRowComponent', () => {
  let component: DetailedRowComponent;
  let fixture: ComponentFixture<DetailedRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
