import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users/users.component';
import { AccountInfoComponent } from './components/users/account-info/account-info.component';
import { ManageOrgComponent } from './components/users/manage-org/manage-org.component';
 
export const routes: Routes = [
    {
        path: '', component: ManageOrgComponent
    },
    {
        path: 'accountInfo', component: AccountInfoComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrgadminRoutingModule { }
