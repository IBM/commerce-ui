import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountComponent } from './user-account.component';
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
import { SearchPipe } from '../../../pipe/search.pipe';
import { IframeService } from '../../../../../services/iframe.service';

fdescribe('UserAccountComponent', () => {
  let router: Router;
  let location: Location;
  let component: UserAccountComponent;
  let fixture: ComponentFixture<UserAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule, FormsModule, DialogModule, Search16Module,
         Add16Module, ChevronRight16Module,
         Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module,
         TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ IframeService],
      declarations: [ UserAccountComponent, SearchPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(UserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create userAccount component', () => {
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
});
