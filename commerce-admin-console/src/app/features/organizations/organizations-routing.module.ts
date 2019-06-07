import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOrganizationsComponent } from './list-organizations/list-organizations.component';
import { FindOrganizationsComponent } from './find-organizations/find-organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';

const routes: Routes = [
	{
		path: '',
		component: ListOrganizationsComponent
	},
	{
		path: 'find',
		component: FindOrganizationsComponent
	},
	{
		path: 'create',
		component: CreateOrganizationComponent
	},
	{
		path: ':id',
		component: EditOrganizationComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
