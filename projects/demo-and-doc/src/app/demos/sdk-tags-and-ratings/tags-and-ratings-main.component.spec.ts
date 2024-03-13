import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsAndRatingsMainComponent } from './tags-and-ratings-main.component';

describe('TagsAndRatingsMainComponent', () => {
  let component: TagsAndRatingsMainComponent;
  let fixture: ComponentFixture<TagsAndRatingsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsAndRatingsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagsAndRatingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
