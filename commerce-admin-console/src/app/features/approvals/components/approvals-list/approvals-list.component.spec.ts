import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalsListComponent } from './approvals-list.component';
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
fdescribe('ApprovalsListComponent', () => {
  let component: ApprovalsListComponent;
  let fixture: ComponentFixture<ApprovalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, DialogModule, Search16Module, Add16Module,
        ChevronRight16Module, Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module,
        ViewOff16Module, Ng2SearchPipeModule,
       TranslateModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ApprovalsListComponent ],
      providers: [ApprovalStatusService, UsersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('testing of the approvals list service', () => {
    const response = {
                resultCount: 1,
                results: [
                    {
                      name: 'SRIMAN',
                      parentOrganizationName: 'HCL',
                      organizationType: 'Finance'
                    }
                ]
            };
            fixture.detectChanges();
            expect(response.resultCount).toBe(1);
            expect(response.results[0].name).toBe('SRIMAN');
            expect(response.results[0].parentOrganizationName).toBe('HCL');
            expect(response.results[0].organizationType).toBe('Finance');
  });

  it('testing of the approvals list service', () => {
    fixture = TestBed.createComponent(ApprovalsListComponent);
    component = fixture.debugElement.componentInstance;
    // tslint:disable-next-line:no-shadowed-variable
    const ApprovalService = fixture.debugElement.injector.get(ApprovalStatusService);
    fixture.detectChanges();
    // tslint:disable-next-line:prefer-const
    let offset: any = 1;
    expect(ApprovalService.findAllResponse(offset).subscribe(result => expect(result.url).toBeGreaterThan(0)));
  });
});
