import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineGroupComponent } from './define-group.component';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
fdescribe('DefineGroupComponent', () => {
  let component: DefineGroupComponent;
  let fixture: ComponentFixture<DefineGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, DialogModule, Search16Module, Add16Module,
        ChevronRight16Module, Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module,
        ViewOff16Module, Ng2SearchPipeModule,
       TranslateModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
      declarations: [ DefineGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('account text field validity', () => {
    const account = component.groupDefineForm.controls['account'];
    expect(account.valid).toBeFalsy();
  });
  it('findAccount text field validity', () => {
    const findAccount = component.groupDefineForm.controls['findAccount'];
    expect(findAccount.valid).toBeFalsy();
  });
  it('accountSize text field validity', () => {
    const accountSize = component.groupDefineForm.controls['accountSize'];
    expect(accountSize.valid).toBeFalsy();
  });
  it('mediumLargeAccount text field validity', () => {
    const mediumLargeAccount = component.groupDefineForm.controls['mediumLargeAccount'];
    expect(mediumLargeAccount.valid).toBeFalsy();
  });
  it('accountGeographical text field validity', () => {
    const accountGeographical = component.groupDefineForm.controls['accountGeographical'];
    expect(accountGeographical.valid).toBeFalsy();
  });
  it('findGeographical text field validity', () => {
    const findGeographical = component.groupDefineForm.controls['findGeographical'];
    expect(findGeographical.valid).toBeFalsy();
  });
  it('accountLocation text field validity', () => {
    const accountLocation = component.groupDefineForm.controls['accountLocation'];
    expect(accountLocation.valid).toBeFalsy();
  });
  it('accountIndustry text field validity', () => {
    const accountIndustry = component.groupDefineForm.controls['accountIndustry'];
    expect(accountIndustry.valid).toBeFalsy();
  });
  it('consumerProduct text field validity', () => {
    const consumerProduct = component.groupDefineForm.controls['consumerProduct'];
    expect(consumerProduct.valid).toBeFalsy();
  });
  it('accountBusiness text field validity', () => {
    const accountBusiness = component.groupDefineForm.controls['accountBusiness'];
    expect(accountBusiness.valid).toBeFalsy();
  });
  it('accountDistributor text field validity', () => {
    const accountDistributor = component.groupDefineForm.controls['accountDistributor'];
    expect(accountDistributor.valid).toBeFalsy();
  });
  it('accountSales text field validity', () => {
    const accountSales = component.groupDefineForm.controls['accountSales'];
    expect(accountSales.valid).toBeFalsy();
  });
  it('amount text field validity', () => {
    const amount = component.groupDefineForm.controls['amount'];
    expect(amount.valid).toBeFalsy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
