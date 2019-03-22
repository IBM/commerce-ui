import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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

@NgModule({
  imports: [
    CommonModule,
  ComponentsModule,
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
    SearchModalComponent,
    AddUserComponent,
    ButtonBarComponent,
    UserListDashboardComponent,
    UserTableComponent,
    ManageUserComponent,
    AccountInfoComponent,
    OrganisationLandingPageComponent
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class UserManagementModule { }
