import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnParamPaginationComponent } from './bn-param-pagination.component';

describe('BnParamPaginationComponent', () => {
  let component: BnParamPaginationComponent;
  let fixture: ComponentFixture<BnParamPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnParamPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnParamPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
