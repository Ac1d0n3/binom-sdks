import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSvcComponent } from './doc-svc.component';

describe('DocSvcComponent', () => {
  let component: DocSvcComponent;
  let fixture: ComponentFixture<DocSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
