import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import {
  NFormsModule, DropdownModule, TableModule, PaginationModule,
  DialogModule, ModalModule, TabsModule
} from 'carbon-components-angular';
import { IconModule } from '@carbon/icons-angular';

import { TranslateModule } from '@ngx-translate/core';
import { UserGroupsComponent } from './components/users/user-groups/user-groups.component';
import { UserRolesComponent } from './components/users/user-roles/user-roles.component';
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
    TabsModule,
    PaginationModule,
    IconModule,
    DialogModule,
    ModalModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
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
  ],
  entryComponents: [
  ]
})
export class UserManagementModule { }
