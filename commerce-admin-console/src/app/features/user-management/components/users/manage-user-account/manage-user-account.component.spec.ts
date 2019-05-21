import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUserAccountComponent } from './manage-user-account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, Injector } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';
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
import { UsersService } from '../../../../../../../src/app/rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import { IframeService } from '../../../../../services/iframe.service';
import { Settings16Module } from '@carbon/icons-angular/lib/settings/16';
import { SearchPipe } from '../../../pipe/search.pipe';

import { UserAccountPolicyDescriptionsService } from '../../../../../rest/services/user-account-policy-descriptions.service';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
const routes: Routes = [
  {path: 'organizations', component: ManageUserAccountComponent}
];

class MockManageUserAccountService {

}

fdescribe('ManageUserAccountComponent', () => {
  let component: ManageUserAccountComponent;
  let fixture: ComponentFixture<ManageUserAccountComponent>;
  let usermainService: UserMainService;
  let router: Router;
  let location: Location;
  let form: DebugElement;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserAccountComponent , SearchPipe],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        DialogModule,
        Search16Module,
        Add16Module,
        ChevronRight16Module,
        Menu32Module,
        CheckmarkOutline16Module,
        ArrowDown16Module,
        CheckmarkFilled16Module,
        View16Module,
        ViewOff16Module,
        Settings16Module,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        RouterTestingModule.withRoutes(routes)
      ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          { provide: UserMainService, useClass: MockManageUserAccountService },
          TranslateService,
          UsersService,
          UserMainService,
          IframeService,
          UserMainService,
          MockManageUserAccountService,
          UserAccountPolicyDescriptionsService,
          OrganizationsService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserAccountComponent);
    router = TestBed.get(Router); 
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    component.ngOnInit();
    form = fixture.debugElement.query(By.css('form'));
    usermainService = TestBed.get(UserMainService);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.accountForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    const email1 = component.accountForm.controls['email1'];
    expect(email1.valid).toBeFalsy();
  });
  it('email field validity, input required', () => {
    let errors = {};
    const email1 = component.accountForm.controls['email1'];
    errors = email1.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('email field validity, pattern validation', () => {
    let errors = {};
    const email1 = component.accountForm.controls['email1'];
    email1.setValue('test');
errors = email1.errors || {};
expect(errors['pattern']).toBeTruthy();
  });

  it('testing of the Account policy list service', () => {
    fixture = TestBed.createComponent(ManageUserAccountComponent);
    component = fixture.debugElement.componentInstance;
    const accountPolicyService = fixture.debugElement.injector.get(UserAccountPolicyDescriptionsService);
    fixture.detectChanges();
    expect(accountPolicyService.getUserAccountPolicyDescriptions({}).subscribe(result => {
      expect(result.items.length).toBeGreaterThan(0);
    }));
  });

  fit('testing of the organisations service', () => {
    fixture = TestBed.createComponent(ManageUserAccountComponent);
    component = fixture.debugElement.componentInstance;
    const organisationsService = fixture.debugElement.injector.get(OrganizationsService);
    fixture.detectChanges();
    expect(organisationsService.OrganizationGetManageableOrganizations({}).subscribe(result => {
      expect(result.items.length).toBeGreaterThan(0);
    }));
  });
  // it('should initialize successfully', () => {
  //   var manageUserData = [];
  //   var manageUserResponse = {
  //     showInput: "boolean",
  //     disabled: '',
  //     accountData: "unitTest",
  //     userAccountData: "unitTest",
  //     logonId: "unitTest",
  //     email1: "unitTest",
  //     password: "unitTest",
  //     passwordVerify: "unitTest",
  //     organizationName: "unitTest",
  //     policy: "unitTest",
  //     emailPattern: "unitTest",
  //     envalidEmail: "unitTest",
  //     manageUserResponse: "unitTest",
  //     id: "number"
  //   }
  //   manageUserData.push(manageUserResponse);
  //   spyOn(usermainService, 'updateUser').and.returnValue(Promise.resolve(manageUserData));
  //   component.ngOnInit();
  //   setTimeout(function() {
  //     expect(usermainService.updateUser).toHaveBeenCalled();
  //     expect(component.updateUser.find(entry => entry.content == "unitTest")).toBeDefined;
  //     // expect(component.parentOrgItems.find(entry => entry.content == "Root Organization")).toBeDefined;
  //   }, 1000);
  // });

  // it('the logonId should not be assigned given the logonId is not selected', () => {
  //   // let selection : Object = {'item' : {'selected' : false, 'content' : ''}};
  //   component.accountCall();
  //   expect(component.logonId).toBeNull;
  // });

  // it('should find the correct existing user when the request is valid', () => {
  //   // expect(component.validRequest()).toBe(false);
  //   // let org : Object = {'item' : {'selected' : true, 'content' : 'unitTestOrg'}};
  //   // let parentOrg : Object = {'item' : {'selected' : true, 'content' : 'parentUnitTestOrg'}};
  //   // component.onOrgSelected(org);
  //   // expect(component.validRequest()).toBe(true);
  //   // component.onParentOrgSelected(parentOrg);
  //   // expect(component.validRequest()).toBe(true);
  //   // expect(component.orgName).toEqual('unitTestOrg');
  //   // expect(component.orgParentName).toEqual('parentUnitTestOrg');
  //   component.saveAccount();
  //   setTimeout(function() {
  //     expect(location.path()).toBe('/users/manageContact');
  //   }, 1000);
  // });
});
