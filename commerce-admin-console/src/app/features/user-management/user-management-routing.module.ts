import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListDashboardComponent } from './user-list/user-list-dashboard/user-list-dashboard.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { OrganisationLandingPageComponent } from './components/organisation-landing-page/organisation-landing-page.component';

const routes: Routes = [
  {
    path: '', component: ManageUserComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'edit-user/:id', component: AddUserComponent
  },
  {
    path: 'manage_user', component: ManageUserComponent
  },
  {
    path: 'ceate_user', component: AccountInfoComponent
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
