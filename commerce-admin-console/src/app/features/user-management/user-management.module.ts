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
  IconModule,
  DialogModule, ModalModule
} from 'carbon-components-angular';

import { SearchModalComponent } from './user-list/search-modal/search-modal.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonBarComponent } from './user-list/button-bar/button-bar.component';
import { UserListDashboardComponent } from './user-list/user-list-dashboard/user-list-dashboard.component';
import { UserTableComponent } from './user-list/user-table/user-table.component';

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
    UserTableComponent
  ],
  providers: [
    SearchService
  ],
  entryComponents: [
    SearchModalComponent
  ]
})
export class UserManagementModule { }
