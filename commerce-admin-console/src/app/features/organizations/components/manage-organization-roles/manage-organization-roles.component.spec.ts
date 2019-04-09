import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganizationRolesComponent } from './manage-organization-roles.component';

describe('ManageOrganizationRolesComponent', () => {
  let component: ManageOrganizationRolesComponent;
  let fixture: ComponentFixture<ManageOrganizationRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrganizationRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrganizationRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
