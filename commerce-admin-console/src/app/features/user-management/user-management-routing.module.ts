import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './components/users/user-account/user-account.component';
import { UserContactComponent } from './components/users/user-contact/user-contact.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { ManageUserAccountComponent } from './components/users/manage-user-account/manage-user-account.component';
import { ManageUserContactComponent } from './components/users/manage-user-contact/manage-user-contact.component';
import { ManageUserGroupsComponent } from './components/users/manage-user-groups/manage-user-groups.component';
import { ManageUserRolesComponent } from './components/users/manage-user-roles/manage-user-roles.component';
import { UserRolesComponent } from './components/users/user-roles/user-roles.component';
import { UserGroupsComponent } from './components/users/user-groups/user-groups.component';

const routes: Routes = [
  {
    path: '', component: UserListComponent
  },
  {
    path: 'user-account', component: UserAccountComponent
  },
  {
      path: 'user-contact', component: UserContactComponent
  },
  {
      path: 'user-roles', component: UserRolesComponent
  },
  {
    path: 'user-groups', component: UserGroupsComponent
  },
  {
    path: 'manageAccount/:id', component: ManageUserAccountComponent
  },
  {
    path: 'manageContact/:id', component: ManageUserContactComponent
  },
  {
    path: 'manageGroups', component: ManageUserGroupsComponent
  },
  {
    path: 'manageRoles/:id', component: ManageUserRolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
