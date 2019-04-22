import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location} from "@angular/common";
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';

import { OrganizationListComponent } from './organization-list.component';
import { OrganizationsService } from '../../../../rest/services/organizations.service';

// describe('OrganizationListComponent', () => {
//   let component: OrganizationListComponent;
//   let fixture: ComponentFixture<OrganizationListComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ OrganizationListComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(OrganizationListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

const routes: Routes = [
  {path: 'organizations', component: OrganizationListComponent}
];

class MockOrganizationsService {

}
fdescribe('FindOrganizationComponent', () => {
  let component: OrganizationListComponent;
  let fixture: ComponentFixture<OrganizationListComponent>;
  let router: Router;
  let location: Location;
let orgService : OrganizationsService;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [  
        TranslateModule.forChild({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
       
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ OrganizationListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: OrganizationsService, useClass: MockOrganizationsService },
       
        MockOrganizationsService,
        
      ]
    })
    .compileComponents();
    done();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot()],
      declarations: [ OrganizationListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router); 
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(OrganizationListComponent);
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
        organizationName: "Default Organization",
        parentMemberId: "Root Organization",
        parentMemberName: "Root Organization",
        state: "Approved",
        status: "Unlocked",
        type: "unitTest"
    }
    organizationsData.push(orgResponse);
    spyOn(orgService, 'OrganizationGetManageableOrganizations').and.returnValue(Promise.resolve(organizationsData));
    component.ngOnInit();
    setTimeout(function() {
      expect(orgService.OrganizationGetManageableOrganizations).toHaveBeenCalled();
      expect(component.organizationResponse.find(item => item.content == "unitTest")).toBeDefined;
      expect(component.organizationResponse.find(item => item.content == "Root Organization")).toBeDefined;
      done();
    }, 1000);
  });

  // it('the org name should not be assigned given the org is not selected', (done) => {
  //   let selection : Object = {'item' : {'selected' : false, 'content' : ''}};
  //   component.onOrgSelected(selection);
  //   expect(component.orgName).toBeNull;
  //   done();
  // });

  // it('the parent org name should not be assigned given the parent org is not selected', (done) => {
  //   let selection : Object = {'item' : {'selected' : false, 'content' : ''}};
  //   component.onParentOrgSelected(selection);
  //   expect(component.orgParentName).toBeNull;
  //   done();
  // });

  it('Organisation landing should contain "Translation header!"', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const header  = headerElement.querySelector('userName');
    expect(header.textContent).toContain('organizations');
  });
  
  // it('checking the service', inject([OrganizationsService]),  (service: OrganizationsService) => {
  //   expect(service).toBeTruthy(); 
  // });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/");
    });
  }));

  // it('navigate to "search" takes you to /masterCategory', fakeAsync(() => {
  //   component.onSelect();
  //   router.navigate(["/catalogs/masterCategory"]).then(() => {
  //     expect(location.path()).toBe("/catalogs/masterCategory");
  //   });
  // }));


});

