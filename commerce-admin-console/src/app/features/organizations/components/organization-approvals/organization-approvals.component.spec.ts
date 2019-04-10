import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationApprovalsComponent } from './organization-approvals.component';

describe('OrganizationApprovalsComponent', () => {
  let component: OrganizationApprovalsComponent;
  let fixture: ComponentFixture<OrganizationApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
