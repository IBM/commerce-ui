import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMasterCategoryComponent } from './new-master-category.component';

describe('NewMasterCategoryComponent', () => {
  let component: NewMasterCategoryComponent;
  let fixture: ComponentFixture<NewMasterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMasterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMasterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
