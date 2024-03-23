import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnGridNavRolesItemComponent } from './bn-grid-nav-roles-item.component';

describe('BnGridNavRolesItemComponent', () => {
  let component: BnGridNavRolesItemComponent;
  let fixture: ComponentFixture<BnGridNavRolesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnGridNavRolesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnGridNavRolesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
