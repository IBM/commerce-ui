import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserContactComponent } from './user-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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
import { CountriesService } from '../../../../../rest/services/countries.service';
import { StatesService } from '../../../../../rest/services/states.service';
import { resolve } from 'url';
import { SearchPipe } from '../../../pipe/search.pipe';
import { IframeService } from '../../../../../services/iframe.service';
fdescribe('UserContactComponent', () => {
  let router: Router;
  let location: Location;
  let component: UserContactComponent;
  let fixture: ComponentFixture<UserContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, DialogModule, Search16Module, Add16Module, ChevronRight16Module,
        // tslint:disable-next-line:max-line-length
        Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module, ReactiveFormsModule, 
        TranslateModule.forRoot()],
        providers: [CountriesService, StatesService, IframeService],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ UserContactComponent, SearchPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(UserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('testing of the country service', () => {
    fixture = TestBed.createComponent(UserContactComponent);
    component = fixture.debugElement.componentInstance;
    const countryService = fixture.debugElement.injector.get(CountriesService);
    fixture.detectChanges();
    expect(countryService.getCountries({}).subscribe(result => {
      expect(result.items.length).toBeGreaterThan(0);
    }));
  });

  it('testing of the state service', () => {
    fixture = TestBed.createComponent(UserContactComponent);
    component = fixture.debugElement.componentInstance;
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
