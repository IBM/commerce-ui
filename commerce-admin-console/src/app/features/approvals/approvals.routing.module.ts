import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalDashboardComponent } from './approval-dashboard/approval-dashboard.component';
import { ApprovalsListComponent } from './components/approvals-list/approvals-list.component';

const routes: Routes = [
  {
    path: '',
    component: ApprovalsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalsRoutingModule { }
