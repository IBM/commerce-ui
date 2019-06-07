import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalDashboardComponent } from './approval-dashboard/approval-dashboard.component';
import {
  DropdownModule,
  IconModule,
  ModalModule,
  ListGroupModule,
  TableModule,
  PaginationModule,
  NFormsModule
} from 'carbon-components-angular';
import { ViewDropdownComponent } from './view-dropdown/view-dropdown.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { ApprovalTableComponent } from './approval-table/approval-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../../components/components.module';
import { ApprovalsRoutingModule } from './approvals.routing.module';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { ApprovalStatusQueryService } from './approvals-status-query.service';
import { FormsModule } from '@angular/forms';
import { ApprovalUpdateService } from './approval-update.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    ApprovalsRoutingModule,
    CommonModule,
    ComponentsModule,
    DropdownModule,
    ModalModule,
    IconModule,
    ListGroupModule,
    NFormsModule,
    TableModule,
    PaginationModule,
    HttpClientModule,
    FormsModule,
    TranslateModule
  ],
  providers: [
    ApprovalStatusQueryService,
    ApprovalUpdateService,
  ],
  declarations: [
    ApprovalDashboardComponent,
    ViewDropdownComponent,
    ButtonBarComponent,
    ApprovalTableComponent,
    SearchModalComponent
  ],
  entryComponents: [
    SearchModalComponent
  ]
})
export class ApprovalsModule { }
