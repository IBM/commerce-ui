import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FindOrganizationsComponent } from './find-organizations.component';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateFakeLoader } from '@ngx-translate/core';
import { ListOrganizationsComponent } from '../list-organizations/list-organizations.component';
import { SharedModule } from '../../../shared/shared.module'
import { Location} from "@angular/common";
import { OrganizationService } from '../../../rest/services/organization.service';
import { OrganizationsMainService } from '../organizations.main.service';
import { ApiConfiguration } from '../../../rest/api-configuration';
import { FormsModule } from '@angular/forms';
import { IframeService } from '../../../services/iframe.service';
import { AuthService } from '../../../services/auth.service';

const routes: Routes = [
  {path: 'organizations', component: ListOrganizationsComponent}
];

class MockOrganizationService {

}

fdescribe('FindOrganizationComponent', () => {
  let component: FindOrganizationsComponent;
  let fixture: ComponentFixture<FindOrganizationsComponent>;
  let router: Router;
  let location: Location;
  let orgMainService : OrganizationsMainService;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [  
        TranslateModule.forChild({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        SharedModule,
        FormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ FindOrganizationsComponent, ListOrganizationsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: OrganizationService, useClass: MockOrganizationService },
        OrganizationsMainService,
        ApiConfiguration,
        IframeService,
        MockOrganizationService,
        AuthService
      ]
    })
    .compileComponents();
    done();
  });

  beforeEach((done) => {
    orgMainService = TestBed.get(OrganizationsMainService);
    router = TestBed.get(Router); 
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(FindOrganizationsComponent);
    done();
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize successfully', (done) => {
    var organizationsData = [];
    var orgResponse = {
        businessCategory: "business",
        description: "unitTest",
        displayName: "unitTest",
        distinguishedName: "unitTest",
        legalId: "1",
        memberId: "1",
        orgEntityType: 'Organization' ,
        orgEntityTypeCode: '1001',
        organizationId: '101',
        organizationName: "unitTest",
        parentMemberId: "Root Organization",
        parentMemberName: "Root Organization",
        state: "Approved",
        status: "Unlocked",
        type: "unitTest"
    }
    organizationsData.push(orgResponse);
    spyOn(orgMainService, 'getOrganizations').and.returnValue(Promise.resolve(organizationsData));
    component.ngOnInit();
    setTimeout(function() {
      expect(orgMainService.getOrganizations).toHaveBeenCalled();
      expect(component.orgItems.find(entry => entry.content == "unitTest")).toBeDefined;
      expect(component.parentOrgItems.find(entry => entry.content == "Root Organization")).toBeDefined;
      done();
    }, 1000);
  });

  it('the org name should not be assigned given the org is not selected', (done) => {
    let selection : Object = {'item' : {'selected' : false, 'content' : ''}};
    component.onOrgSelected(selection);
    expect(component.orgName).toBeNull;
    done();
  });

  it('the parent org name should not be assigned given the parent org is not selected', (done) => {
    let selection : Object = {'item' : {'selected' : false, 'content' : ''}};
    component.onParentOrgSelected(selection);
    expect(component.orgParentName).toBeNull;
    done();
  });

  it('should find the correct org when the request is valid', (done) => {
    expect(component.validRequest()).toBe(false);
    let org : Object = {'item' : {'selected' : true, 'content' : 'unitTestOrg'}};
    let parentOrg : Object = {'item' : {'selected' : true, 'content' : 'parentUnitTestOrg'}};
    component.onOrgSelected(org);
    expect(component.validRequest()).toBe(true);
    component.onParentOrgSelected(parentOrg);
    expect(component.validRequest()).toBe(true);
    expect(component.orgName).toEqual('unitTestOrg');
    expect(component.orgParentName).toEqual('parentUnitTestOrg');
    component.findOrg();
    setTimeout(function() {
      expect(location.path()).toBe('/organizations?name=unitTestOrg&parent=parentUnitTestOrg');
      done();
    }, 1000);
  });
});
