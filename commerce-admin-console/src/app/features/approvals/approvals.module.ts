import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalDashboardComponent } from './approval-dashboard/approval-dashboard.component';
import {
  DropdownModule,
  ModalModule,
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
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';
import { CloseOutline16Module } from '@carbon/icons-angular/lib/close--outline/16';
import { Search16Module } from '@carbon/icons-angular/lib/search/16';

@NgModule({
  imports: [
    ApprovalsRoutingModule,
    CommonModule,
    ComponentsModule,
    DropdownModule,
    ModalModule,
    NFormsModule,
    TableModule,
    PaginationModule,
    HttpClientModule,
    FormsModule,
    TranslateModule,
    CheckmarkOutline16Module,
    CloseOutline16Module,
    Search16Module
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