import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalDashboardComponent } from './approval-dashboard/approval-dashboard.component';
import { ApprovalsListComponent } from './components/approvals-list/approvals-list.component';
import { ApprovalSummaryComponent } from './components/approval-summary/approval-summary.component';

const routes: Routes = [
  {
    path: '',
    component: ApprovalsListComponent
  },
  {
    path: 'approvalSummary',
    component: ApprovalSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalsRoutingModule { }
