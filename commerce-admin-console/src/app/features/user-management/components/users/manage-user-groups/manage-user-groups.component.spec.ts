import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserGroupsComponent } from './manage-user-groups.component';

describe('ManageUserGroupsComponent', () => {
  let component: ManageUserGroupsComponent;
  let fixture: ComponentFixture<ManageUserGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
