import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLoaderComponent } from './multi-loader.component';

describe('MultiLoaderComponent', () => {
  let component: MultiLoaderComponent;
  let fixture: ComponentFixture<MultiLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
