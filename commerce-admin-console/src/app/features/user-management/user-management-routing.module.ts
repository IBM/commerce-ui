import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListDashboardComponent } from './user-list/user-list-dashboard/user-list-dashboard.component';
import { OrganisationLandingPageComponent } from './components/organisation-landing-page/organisation-landing-page.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { UserAccountComponent } from './components/users/user-account/user-account.component';
import { UserContactComponent } from './components/users/user-contact/user-contact.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { ManageUserAccountComponent } from './components/users/manage-user-account/manage-user-account.component';
import { ManageUserContactComponent } from './components/users/manage-user-contact/manage-user-contact.component';
import { ManageUserGroupsComponent } from './components/users/manage-user-groups/manage-user-groups.component';
import { ManageUserRolesComponent } from './components/users/manage-user-roles/manage-user-roles.component';
import { OrganizationListComponent } from './components/organizations/organization-list/organization-list.component';

const routes: Routes = [
  {
    path: '', component: UserAccountComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'edit-user/:id', component: AddUserComponent
  },
  {
    path: 'userList', component: UserListComponent
},
  {
    path: 'ceate_user', component: UserAccountComponent
  },
  {
      path: 'contactIngo', component: UserContactComponent
  },
  {
      path: 'userRoles', component: UserRolesComponent
  },
  {
    path: 'manage_account', component: ManageUserAccountComponent
  },
  {
    path: 'manage_contact', component: ManageUserContactComponent
  },
  {
    path: 'manage_groups', component: ManageUserGroupsComponent
  },
  {
    path: 'manage_roles', component: ManageUserRolesComponent
  },
  {
    path: 'organizationsList', component: OrganizationListComponent
  },
  {
    path: 'landing_page', component: OrganisationLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
