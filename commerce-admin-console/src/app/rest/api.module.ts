/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { OnlineStoresService } from './services/online-stores.service';
import { OrganizationsService } from './services/organizations.service';
import { UsersService } from './services/users.service';
import { AddressesService } from './services/addresses.service';
import { RolesService } from './services/roles.service';
import { UserAccountPoliciesService } from './services/user-account-policies.service';
import { LanguagesService } from './services/languages.service';
import { LanguageDescriptionsService } from './services/language-descriptions.service';
import { StatesService } from './services/states.service';
import { CountriesService } from './services/countries.service';
import { RoleAssignmentsService } from './services/role-assignments.service';
import { ApiService } from './services/api.service';
import { MemberGroupMembershipsService } from './services/member-group-memberships.service';
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
    RolesService,
    UserAccountPoliciesService,
    LanguagesService,
    LanguageDescriptionsService,
    StatesService,
    CountriesService,
    RoleAssignmentsService,
    ApiService,
    MemberGroupMembershipsService,
    PersonService,
    ApprovalStatusService,
    CountryService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
