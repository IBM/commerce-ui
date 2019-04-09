import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRolesComponent } from './organization-roles.component';

describe('OrganizationRolesComponent', () => {
  let component: OrganizationRolesComponent;
  let fixture: ComponentFixture<OrganizationRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
