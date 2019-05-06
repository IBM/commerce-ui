import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
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
import { UsersService } from '../../../../../rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
fdescribe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule,  FormsModule, DialogModule, Search16Module,
        Add16Module, ChevronRight16Module, HttpClientModule, HttpClientTestingModule, HttpTestingController,
        Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module, tick,
        TranslateModule.forRoot()],
      providers: [UsersService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  // Returns a service with the MockBackend so we can test with dummy responses
  service = TestBed.get(UsersService);
  // Inject the http service and test controller for each test
  httpTestingController = TestBed.get(HttpTestingController);

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  /*... Trial ...*/
  it(
    'search should return SearchItems',
    fakeAsync(() => {
      const response = {
        resultCount: 1,
        results: [
          {
            logonId: 78500,
            firstName: 'U2',
            lastName: 'Beautiful Day',
          }
        ]
      };

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      // service.UsersGetManageableUsers();

      // Expect a call to this URL
      const req = httpTestingController.expectOne(
        'https://xiangxil1.fyre.ibm.com:5443/rest/admin/v2/users/manageable'
      );
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with this data when called
      req.flush(response);

      // Call tick whic actually processes te response
      this.tick();

      // Run our tests
      expect(response.results.length).toBe(1);
      expect(response.results[0].logonId).toBe(78500);
      expect(response.results[0].firstName).toBe('U2');
      expect(response.results[0].lastName).toBe('Beautiful Day');
    })
  );
  /*... Trial ...*/
  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
