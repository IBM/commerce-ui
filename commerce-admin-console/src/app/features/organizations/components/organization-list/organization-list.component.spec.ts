import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location} from "@angular/common";
import { TranslateLoader, TranslateModule, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';

import { OrganizationListComponent } from './organization-list.component';

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




fdescribe('OrganisationLandingPageComponent', () => {
  let component: OrganizationListComponent;
  let fixture: ComponentFixture<OrganizationListComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationListComponent ]
    })
    .compileComponents();
  }));

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


  it('Organisation landing should contain "Translation header!"', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const header  = headerElement.querySelector('h3');
    expect(header.textContent).toContain('organizations');
  });
  
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

