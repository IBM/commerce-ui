import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { DefineGroupComponent } from './components/define-group/define-group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  },
  {
    path: 'groupDetails',
    component: GroupDetailsComponent
  },
  {
    path: 'defineGroup',
    component: DefineGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberGroupsRoutingModule { }
