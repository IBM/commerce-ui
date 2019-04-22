import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageUserContactComponent } from './manage-user-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, Injector } from '@angular/core';
import { TranslateModule, TranslateLoader, TranslateFakeLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
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
      declarations: [ ManageUserContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
