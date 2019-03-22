import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationLandingPageComponent } from './organisation-landing-page.component';

describe('OrganisationLandingPageComponent', () => {
  let component: OrganisationLandingPageComponent;
  let fixture: ComponentFixture<OrganisationLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
