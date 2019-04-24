import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationContactComponent, User } from './organization-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from 'carbon-components-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

fdescribe('OrganizationContactComponent', () => {
  let component: OrganizationContactComponent;
  let fixture: ComponentFixture<OrganizationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line:max-line-length
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, DialogModule, Search16Module, Add16Module, ChevronRight16Module,
        Menu32Module, CheckmarkOutline16Module, ArrowDown16Module, CheckmarkFilled16Module, View16Module, ViewOff16Module,
        TranslateModule.forRoot()],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ OrganizationContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
});
it('email field validity', () => {
  let errors = {};
  const email = component.contactForm.controls['contactEmail'];
  expect(email.valid).toBeFalsy();

  // Email field is required
  errors = email.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set email to something wrong
  email.setValue('test');
  errors = email.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['pattern']).toBeTruthy();

  // Set email to something correct
  email.setValue('test@example.com');
  errors = email.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['pattern']).toBeFalsy();
});


it('user field validity', () => {
let errors = {};
const userName = component.contactForm.controls['contactName'];
expect (userName.valid).toBeFalsy();

// user name field is required
errors = userName.errors  || {};
expect(errors['required']).toBeTruthy();
// user name field min length
expect(errors['minlength']).toBeFalsy();
// user name field max length
expect(errors['maxlength']).toBeFalsy();

// Set user name to something wrong
userName.setValue('Rob');
errors = userName.errors || {};
expect(errors['required']).toBeFalsy();
expect(errors['minlength']).toBeTruthy();
expect(errors['maxlength']).toBeFalsy();

// Set user name to something correct
userName.setValue('Sriman');
errors = userName.errors || {};
expect(errors['required']).toBeFalsy();
expect(errors['minlength']).toBeFalsy();
expect(errors['maxlength']).toBeFalsy();
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.contactForm.valid).toBeFalsy();
    component.contactForm.controls['contactEmail'].setValue('test@test.com');
    component.contactForm.controls['contactName'].setValue('Sriman');
    expect(component.contactForm.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);
    // Trigger the login function
    component.onSubmit();
    // Now we can check to make sure the emitted value is correct
    expect(user.contactEmail).toBe('test@test.com');
    expect(user.contactName).toBe('Sriman');
});
});
