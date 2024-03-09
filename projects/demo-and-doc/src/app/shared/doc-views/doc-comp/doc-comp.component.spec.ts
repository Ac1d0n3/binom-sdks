import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCompComponent } from './doc-comp.component';

describe('DocCompComponent', () => {
  let component: DocCompComponent;
  let fixture: ComponentFixture<DocCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
