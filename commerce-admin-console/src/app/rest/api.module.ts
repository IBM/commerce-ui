/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { OnlineStoresService } from './services/online-stores.service';
import { OrganizationService } from './services/organization.service';
import { PersonService } from './services/person.service';
import { ApprovalStatusService } from './services/approval-status.service';
import { CountryService } from './services/country.service';

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
    OnlineStoresService,
    OrganizationService,
    PersonService,
    ApprovalStatusService,
    CountryService
  ],
})
export class ApiModule { }
