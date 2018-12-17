/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { OrganizationService } from './services/organization.service';
import { PersonService } from './services/person.service';
import { ContactService } from './services/contact.service';
import { CheckoutProfileService } from './services/checkout-profile.service';
import { UserActivateService } from './services/user-activate.service';
import { ApprovalStatusService } from './services/approval-status.service';

import { StoreLocatorService } from './services/store-locator.service';
import { CountryService } from './services/country.service';
import { GeonodeService } from './services/geonode.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    OrganizationService,
    PersonService,
    ContactService,
    CheckoutProfileService,
    UserActivateService,
    ApprovalStatusService,
    ApiConfiguration,
    StoreLocatorService,
    CountryService,
    GeonodeService
  ],
})
export class ApiModule { }
