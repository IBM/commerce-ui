import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserGroupsComponent } from './user-groups.component';
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
import { IframeService } from '../../../../../services/iframe.service';
import { UsersService } from '../../../../../rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
fdescribe('UserGroupsComponent', () => {
  let router: Router;
  let location: Location;
  let component: UserGroupsComponent;
  let fixture: ComponentFixture<UserGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, DialogModule, Search16Module, Add16Module,
         ChevronRight16Module, Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module,
         ViewOff16Module, Ng2SearchPipeModule,
        TranslateModule.forRoot()],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     providers: [IframeService, UsersService, UserMainService],
      declarations: [ UserGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(UserGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('testing of the groups service', () => {
  //   const groupsService = fixture.debugElement.injector.get(UserMainService);
  //   fixture.detectChanges();
  //   expect(groupsService.createUser().then(result => {
  //     const createUserResponse = Object.assign([], result);
  //     expect(createUserResponse.length).toBeGreaterThan(0);
  //   }));
  // });

  it('Include search text field validity', () => {
    const includeSearchText = component.groupForm.controls['includeSearchText'];
    expect(includeSearchText.valid).toBeFalsy();
  });
  it('Exclude search text field validity', () => {
    const excludeSearchText = component.groupForm.controls['excludeSearchText'];
    expect(excludeSearchText.valid).toBeFalsy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
