import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganizationContactComponent } from './manage-organization-contact.component';

describe('ManageOrganizationContactComponent', () => {
  let component: ManageOrganizationContactComponent;
  let fixture: ComponentFixture<ManageOrganizationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOrganizationContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOrganizationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
