import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchService } from './search-service.service';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import {
  NFormsModule, DropdownModule, TableModule, PaginationModule,
  DialogModule, ModalModule
} from 'carbon-components-angular';
import { IconModule } from '@carbon/icons-angular';

import { SearchModalComponent } from './user-list/search-modal/search-modal.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonBarComponent } from './user-list/button-bar/button-bar.component';
import { UserListDashboardComponent } from './user-list/user-list-dashboard/user-list-dashboard.component';
import { UserTableComponent } from './user-list/user-table/user-table.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrganisationLandingPageComponent } from './components/organisation-landing-page/organisation-landing-page.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { UserAccountComponent } from './components/users/user-account/user-account.component';
import { UserContactComponent } from './components/users/user-contact/user-contact.component';
import { ManageUserAccountComponent } from './components/users/manage-user-account/manage-user-account.component';
import { ManageUserContactComponent } from './components/users/manage-user-contact/manage-user-contact.component';
import { ManageUserGroupsComponent } from './components/users/manage-user-groups/manage-user-groups.component';
import { ManageUserRolesComponent } from './components/users/manage-user-roles/manage-user-roles.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { OrganizationListComponent } from './components/organizations/organization-list/organization-list.component';

@NgModule({
  imports: [
    CommonModule,
	ComponentsModule,
    UserManagementRoutingModule,
    HttpClientModule,
    NFormsModule,
    DropdownModule,
    TableModule,
    PaginationModule,
    IconModule,
    DialogModule,
    ModalModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    SearchModalComponent,
    AddUserComponent,
    ButtonBarComponent,
    UserListDashboardComponent,
    UserTableComponent,
    ManageUserComponent,
    AccountInfoComponent,
    OrganisationLandingPageComponent,
    ContactInfoComponent,
    UserGroupsComponent,
    UserRolesComponent,
    UserAccountComponent,
    UserContactComponent,
    ManageUserAccountComponent,
    ManageUserContactComponent,
    ManageUserGroupsComponent,
    ManageUserRolesComponent,
    UserListComponent,
    OrganizationListComponent
  ],
  providers: [
    SearchService
  ],
  entryComponents: [
    SearchModalComponent
  ]
})
export class UserManagementModule { }
