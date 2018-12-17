import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'organizations',
		loadChildren: './features/organizations/organizations.module#OrganizationsModule'
	},
	{
		path: 'approvals',
		loadChildren: './features/approvals/approvals.module#ApprovalsModule'
	},
	{
		path: 'users',
		loadChildren: './features/user-management/user-management.module#UserManagementModule'
	},
	{
		path: 'catalogs',
		loadChildren: './features/catalogs/catalogs.module#CatalogsModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
