import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import {
  NFormsModule, DropdownModule, TableModule, PaginationModule,
  DialogModule, ModalModule, TabsModule
} from 'carbon-components-angular';
import { Search16Module } from '@carbon/icons-angular/lib/search/16';
import { Add16Module } from '@carbon/icons-angular/lib/add/16';
import { ChevronRight16Module } from '@carbon/icons-angular/lib/chevron--right/16';
import { Menu32Module } from '@carbon/icons-angular/lib/menu/32';
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';
import { ArrowDown16Module } from '@carbon/icons-angular/lib/arrow--down/16';
import { Close16Module } from '@carbon/icons-angular/lib/close/16';
import { CheckmarkFilled16Module } from '@carbon/icons-angular/lib/checkmark--filled/16';
import { View16Module } from '@carbon/icons-angular/lib/view/16';
import { ViewOff16Module } from '@carbon/icons-angular/lib/view--off/16';
import { Settings16Module } from '@carbon/icons-angular/lib/settings/16';
import { Filter16Module } from '@carbon/icons-angular/lib/filter/16';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  imports: [
    CommonModule,
  ComponentsModule,
  ReactiveFormsModule,
  Ng2SearchPipeModule,
    UserManagementRoutingModule,
    HttpClientModule,
    NFormsModule,
    DropdownModule,
    TableModule,
    TabsModule,
    PaginationModule,
    DialogModule,
    ModalModule,
    Search16Module,
    Add16Module,
    FormsModule,
    TranslateModule,
    Search16Module,
    Add16Module,
    ChevronRight16Module,
    Menu32Module,
    CheckmarkOutline16Module,
    ArrowDown16Module,
    Close16Module,
    CheckmarkFilled16Module,
    View16Module,
    ViewOff16Module,
    Settings16Module,
    Filter16Module
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
    SearchPipe
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class UserManagementModule { }
