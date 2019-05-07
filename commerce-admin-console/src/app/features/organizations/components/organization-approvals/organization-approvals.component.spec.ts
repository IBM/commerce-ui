import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationApprovalsComponent, Approvals } from './organization-approvals.component';
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
import { IframeService } from '../../../../services/iframe.service';
fdescribe('OrganizationApprovalsComponent', () => {
  let component: OrganizationApprovalsComponent;
  let fixture: ComponentFixture<OrganizationApprovalsComponent>;
  // let service: OrganizationMainService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line:max-line-length
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, DialogModule, Search16Module, Add16Module, ChevronRight16Module,
        Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module,
        TranslateModule.forRoot()],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [OrganizationMainService, IframeService],
      declarations: [ OrganizationApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form invalid when empty', () => {
    expect(component.approvalsForm.valid).toBeFalsy();
});

it('Approvals field validity', () => {
  let errors = {};
  const userName = component.approvalsForm.controls['availableApprovals'];
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

  it('submitting a form emits a Approvals', () => {
    expect(component.approvalsForm.valid).toBeFalsy();
    component.approvalsForm.controls['availableApprovals'].setValue('Sriman');
    expect(component.approvalsForm.valid).toBeTruthy();

    let approvals: Approvals;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => approvals = value);
    // Trigger the login function
    component.onSubmit();
    // Now we can check to make sure the emitted value is correct
    expect(approvals.availableApprovals).toBe('Sriman');
});

it('testing of the approval service', () => {
  fixture = TestBed.createComponent(OrganizationApprovalsComponent);
  component = fixture.debugElement.componentInstance;
  const orgApprovalService = fixture.debugElement.injector.get(OrganizationMainService);
  fixture.detectChanges();
  // tslint:disable-next-line:prefer-const
  let offset: any = 1;
  expect(orgApprovalService.createUser().then(result => {
     const createUserResponse = Object.assign([], result);
     expect(createUserResponse.length).toBeGreaterThan(0);
  }));
});
});
