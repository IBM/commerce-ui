/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { OnlineStoresService } from './services/online-stores.service';
import { OrganizationsService } from './services/organizations.service';
import { UsersService } from './services/users.service';
import { AddressesService } from './services/addresses.service';
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
    OrganizationsService,
    UsersService,
    AddressesService,
    PersonService,
    ApprovalStatusService,
    CountryService
  ],
})
export class ApiModule { }
