import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationDetailsComponent, DetailsOrganization } from './organization-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from 'carbon-components-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Search16Module } from '@carbon/icons-angular/lib/search/16';
import { Add16Module } from '@carbon/icons-angular/lib/add/16';
import { ChevronRight16Module } from '@carbon/icons-angular/lib/chevron--right/16';
import { Menu32Module } from '@carbon/icons-angular/lib/menu/32';
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';
import { ArrowDown16Module } from '@carbon/icons-angular/lib/arrow--down/16';
import { CheckmarkFilled16Module } from '@carbon/icons-angular/lib/checkmark--filled/16';
import { View16Module } from '@carbon/icons-angular/lib/view/16';
import { ViewOff16Module } from '@carbon/icons-angular/lib/view--off/16';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationMainService } from '../../organization.main.service';
fdescribe('OrganizationDetailsComponent', () => {
  let component: OrganizationDetailsComponent;
  let fixture: ComponentFixture<OrganizationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line:max-line-length
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, DialogModule, Search16Module, Add16Module, ChevronRight16Module,
        Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module,
        TranslateModule.forRoot()],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [OrganizationMainService],
      declarations: [ OrganizationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form invalid when empty', () => {
    expect(component.detailsForm.valid).toBeFalsy();
});

it('organization name field validity', () => {
  let errors = {};
  const userName = component.detailsForm.controls['organizationName'];
  expect (userName.valid).toBeFalsy();

  // user name field is required
  errors = userName.errors  || {};
  expect(errors['required']).toBeTruthy();

  // Set user name to something wrong
  userName.setValue('');
  errors = userName.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set user name to something correct
  userName.setValue('Sriman');
  errors = userName.errors || {};
  expect(errors['required']).toBeFalsy();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*.... IF the Form Data is empty ...*/
//   it('form invalid when empty', () => {
//     expect(component.userForm.valid).toBeFalsy();
// });
});
