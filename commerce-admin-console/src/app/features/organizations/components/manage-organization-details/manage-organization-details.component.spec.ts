import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganizationDetailsComponent } from './manage-organization-details.component';

describe('ManageOrganizationDetailsComponent', () => {
  let component: ManageOrganizationDetailsComponent;
  let fixture: ComponentFixture<ManageOrganizationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrganizationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
