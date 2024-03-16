import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsAndRatingsHomeComponent } from './tags-and-ratings-home.component';

describe('TagsAndRatingsHomeComponent', () => {
  let component: TagsAndRatingsHomeComponent;
  let fixture: ComponentFixture<TagsAndRatingsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsAndRatingsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsAndRatingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
