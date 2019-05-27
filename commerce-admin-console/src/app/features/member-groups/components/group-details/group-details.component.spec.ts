import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupDetailsComponent } from './group-details.component';
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
fdescribe('GroupDetailsComponent', () => {
  let component: GroupDetailsComponent;
  let fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, DialogModule, Search16Module, Add16Module,
        ChevronRight16Module, Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module,
        ViewOff16Module, Ng2SearchPipeModule,
       TranslateModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
      declarations: [ GroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('type text field validity', () => {
    const type = component.groupDetailsForm.controls['type'];
    expect(type.valid).toBeFalsy();
  });
  it('Name text field validity', () => {
    const Name = component.groupDetailsForm.controls['Name'];
    expect(Name.valid).toBeFalsy();
  });
  it('Description text field validity', () => {
    const Description = component.groupDetailsForm.controls['Description'];
    expect(Description.valid).toBeFalsy();
  });
  it('parentOrganization text field validity', () => {
    const parentOrganization = component.groupDetailsForm.controls['parentOrganization'];
    expect(parentOrganization.valid).toBeFalsy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
