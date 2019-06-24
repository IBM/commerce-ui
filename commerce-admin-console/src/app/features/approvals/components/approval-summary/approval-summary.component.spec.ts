import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSummaryComponent } from './approval-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'carbon-components-angular';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ApprovalStatusService } from '../../../../rest/services/approval-status.service';
import { UsersService } from '../../../../rest/services/users.service';
import { OrganizationsService } from '../../../../rest/services/organizations.service';
import { RoleAssignmentsService } from '../../../../rest/services/role-assignments.service';
import { RoleDescriptionsService } from '../../../../rest/services/role-descriptions.service';
fdescribe('ApprovalSummaryComponent', () => {
  let component: ApprovalSummaryComponent;
  let fixture: ComponentFixture<ApprovalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, DialogModule, Search16Module, Add16Module,
        ChevronRight16Module, Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module,
        ViewOff16Module, Ng2SearchPipeModule,
       TranslateModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ApprovalSummaryComponent ],
      providers: [ApprovalStatusService, UsersService, OrganizationsService, RoleAssignmentsService, RoleDescriptionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing of the users id service', () => {
    fixture = TestBed.createComponent(ApprovalSummaryComponent);
    component = fixture.debugElement.componentInstance;
    // tslint:disable-next-line:no-shadowed-variable
    const usersService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
    // tslint:disable-next-line:prefer-const
    let id = -1101;
    expect(usersService.UsersFindByUserId(id).subscribe(result => expect(result.length).toBeGreaterThan(0)));
  });
});
