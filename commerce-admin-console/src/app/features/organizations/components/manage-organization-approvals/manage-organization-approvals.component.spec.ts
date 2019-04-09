import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganizationApprovalsComponent } from './manage-organization-approvals.component';

describe('ManageOrganizationApprovalsComponent', () => {
  let component: ManageOrganizationApprovalsComponent;
  let fixture: ComponentFixture<ManageOrganizationApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrganizationApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrganizationApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
