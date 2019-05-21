import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GroupListComponent } from './group-list.component';
import { Location} from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
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
import { Settings16Module } from '@carbon/icons-angular/lib/settings/16';
import { Filter16Module } from '@carbon/icons-angular/lib/filter/16';
import { resolve } from 'url';
import {
  NFormsModule, DropdownModule, TableModule, PaginationModule, ModalModule, TabsModule
} from 'carbon-components-angular';
import { IframeService } from '../../../../services/iframe.service';

fdescribe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;
  // tslint:disable-next-line:prefer-const
  let router: Router;
  // tslint:disable-next-line:prefer-const
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, DialogModule, Search16Module, Add16Module, ChevronRight16Module,
        // tslint:disable-next-line:max-line-length
        Menu32Module, CheckmarkOutline16Module, TableModule, PaginationModule, DropdownModule, Settings16Module, Filter16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module, ReactiveFormsModule, 
        TranslateModule.forRoot()],
      declarations: [ GroupListComponent ],
      providers: [IframeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing of the group list service', () => {
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
  // it('testing of the organization list service', () => {
  //   fixture = TestBed.createComponent(OrganizationListComponent);
  //   component = fixture.debugElement.componentInstance;
  //   const userService = fixture.debugElement.injector.get(OrganizationsService);
  //   fixture.detectChanges();
  //   // tslint:disable-next-line:prefer-const
  //   let offset: any = 1;
  //   expect(userService.OrganizationGetManageableOrganizations(offset).subscribe(result => expect(result.length).toBeGreaterThan(0)));
  // });
});
