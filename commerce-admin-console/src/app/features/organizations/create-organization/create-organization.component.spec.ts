import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CreateOrganizationComponent } from './create-organization.component';
import { ListOrganizationsComponent } from '../list-organizations/list-organizations.component';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module'
import { Location} from "@angular/common";
import { OrganizationService } from '../../../rest/services/organization.service';
import { OrganizationsMainService } from '../organizations.main.service';
import { ApiConfiguration } from '../../../rest/api-configuration';
import { IframeService } from '../../../services/iframe.service';
import { AuthService } from '../../../services/auth.service';

const routes: Routes = [
  {path: 'organizations', component: ListOrganizationsComponent}
];

class MockOrganizationService {

}

fdescribe('CreateOrganizationComponent', () => {
  let component: CreateOrganizationComponent;
  let fixture: ComponentFixture<CreateOrganizationComponent>;
  let router: Router;
  let location: Location;
  let orgMainService : OrganizationsMainService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        TranslateModule.forChild({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        SharedModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ CreateOrganizationComponent, ListOrganizationsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: OrganizationService, useClass: MockOrganizationService },
        ApiConfiguration,
        OrganizationsMainService,
        IframeService,
        MockOrganizationService,
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    orgMainService = TestBed.get(OrganizationsMainService);
    router = TestBed.get(Router); 
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(CreateOrganizationComponent);
    router.initialNavigation(); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create the organization and navigate to the corresponding organization', (done) => {
    let orgEntityName : string = 'unitTest'
    let orgEntityType : string = 'Organization'
    let description : string = 'unit test'
    let parentMemberId : string = 'Root Organization'
    let email : string = 'test@ibm.com'
    let phone : string = '8006008888'
    let billingCodeType 
    let country : string = 'Canada'
    let city : string = 'Markham'
    let address : string = '8200 warden street'
    let addressType 
    let state : string = 'Ontario'
    let zipCode : string = 'L3R5W1'

    var org = {
      orgEntityName: orgEntityName,
      distinguishedName: orgEntityName,
      organizationName: orgEntityName,
      orgEntityType: orgEntityType,
      description: description != undefined? description : null,
      parentMemberId: parentMemberId,
      email1: email,
      phone1: phone != undefined? phone : null,
      publishPhone1: phone != undefined ? '1': '0',
      billingCodeType: billingCodeType != undefined? billingCodeType : 'D',
      country: country,
      city: city,
      address1:  address,
      addressType: addressType != undefined? addressType : 'SB',
      state: state,
      zipCode: zipCode
    };

    spyOn(orgMainService, 'createOrganization').and.returnValue(Promise.resolve('147'));
    component.onCreate(org);
    setTimeout(function() {
    expect(orgMainService.createOrganization).toHaveBeenCalled();
    expect(location.path()).toBe('/organizations?orgId=147');
    done();
    }, 1000);
  });

  it('should not create the organization but still able to navigate to /organizations', (done) => {
    var org = null;
    component.onCreate(org);
    setTimeout(function() {   
    expect(location.path()).toBe('/organizations');
    done();
    }, 1000);
  });

});


