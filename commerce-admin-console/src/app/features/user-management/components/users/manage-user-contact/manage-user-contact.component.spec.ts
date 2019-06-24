import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUserContactComponent } from './manage-user-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, Injector } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CountriesService } from '../../../../../rest/services/countries.service';
import { StatesService } from '../../../../../rest/services/states.service';
import {
  NFormsModule, DropdownModule, TableModule, PaginationModule, ModalModule, TabsModule
} from 'carbon-components-angular';
import { SearchPipe } from '../../../pipe/search.pipe';
const routes: Routes = [
  {path: 'organizations', component: ManageUserContactComponent}
];

class MockManageUserContactService {

}


fdescribe('ManageUserContactComponent', () => {
  let component: ManageUserContactComponent;
  let fixture: ComponentFixture<ManageUserContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserContactComponent, SearchPipe ],
      providers: [IframeService, UsersService, UserMainService, CountriesService, StatesService],
      // tslint:disable-next-line:max-line-length
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, DialogModule, Search16Module, Add16Module, ChevronRight16Module,
        // tslint:disable-next-line:max-line-length
        Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, DropdownModule, TableModule, PaginationModule, Settings16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module, ReactiveFormsModule, 
        TranslateModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('testing of the country service', () => {
    const countryService = fixture.debugElement.injector.get(CountriesService);
    fixture.detectChanges();
    expect(countryService.getCountries({}).subscribe(result => {
      expect(result.items.length).toBeGreaterThan(0);
    }));
  });

  fit('testing of the state service', () => {
    const stateService = fixture.debugElement.injector.get(StatesService);
    fixture.detectChanges();
    expect(stateService.getStates({}).subscribe(result => {
      expect(result.items.length).toBeGreaterThan(0);
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
