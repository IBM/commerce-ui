import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users/users.component';
import { AccountInfoComponent } from './components/users/account-info/account-info.component';
import { ManageOrgComponent } from './components/users/manage-org/manage-org.component';
import { OrganisationLandingPageComponent } from './components/organisation-landing-page/organisation-landing-page.component';
import { ContactInfoComponent } from './components/users/contact-info/contact-info.component';
import { UserRolesComponent } from './components/users/user-roles/user-roles.component';
 
export const routes: Routes = [
    {
        path: 'Users', component: UsersComponent
    },
    {
        path: '', component: ManageOrgComponent
    },
    {
        path: 'accountInfo', component: AccountInfoComponent
    },
    {
        path: 'orgland', component: OrganisationLandingPageComponent
    },
    {
        path: 'contactIngo', component: ContactInfoComponent
    },
    {
        path: 'userRoles', component: UserRolesComponent
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrgadminRoutingModule { }
