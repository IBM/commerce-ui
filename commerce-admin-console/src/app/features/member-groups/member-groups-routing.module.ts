import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberGroupListComponent } from './components/member-group-list/member-group-list.component';

const routes: Routes = [
  {
    path: '',
    component: MemberGroupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberGroupsRoutingModule { }
