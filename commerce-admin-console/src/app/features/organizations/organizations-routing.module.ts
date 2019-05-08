import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOrganizationsComponent } from './list-organizations/list-organizations.component';
import { FindOrganizationsComponent } from './find-organizations/find-organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { OrganizationDetailsComponent } from './components/organization-details/organization-details.component';
import { OrganizationContactComponent } from './components/organization-contact/organization-contact.component';
import { OrganizationRolesComponent } from './components/organization-roles/organization-roles.component';
import { OrganizationApprovalsComponent } from './components/organization-approvals/organization-approvals.component';
import { ManageOrganizationDetailsComponent } from './components/manage-organization-details/manage-organization-details.component';
import { ManageOrganizationContactComponent } from './components/manage-organization-contact/manage-organization-contact.component';
import { ManageOrganizationRolesComponent } from './components/manage-organization-roles/manage-organization-roles.component';
import { ManageOrganizationApprovalsComponent } from './components/manage-organization-approvals/manage-organization-approvals.component';
import { GroupListComponent } from './groups/components/group-list/group-list.component';
import { DefineGroupComponent } from './groups/components/define-group/define-group.component';
import { ReviewGroupComponent } from './groups/components/review-group/review-group.component';
import { GroupDetailsComponent } from './groups/components/group-details/group-details.component';

const routes: Routes = [
	{
		path: '', component: OrganizationListComponent
	},
	{
		path: 'organizationsDetails', component: OrganizationDetailsComponent
	},
	{
		path: 'organizationContact', component: OrganizationContactComponent
	},
	{
		path: 'organizationsRoles', component: OrganizationRolesComponent
	},
	{
		path: 'organizationsApprovals', component: OrganizationApprovalsComponent
	},
	{
		path: 'manageOrganizationDetails/:id', component: ManageOrganizationDetailsComponent
	},
	{
		path: 'manageOrganizationContact/:id', component: ManageOrganizationContactComponent
	},
	{
		path: 'manageOrganizationRoles', component: ManageOrganizationRolesComponent
	},
	{
		path: 'manageOrganizationApprovals', component: ManageOrganizationApprovalsComponent
	},
	{
		path: 'groupList', component: GroupListComponent
	},
	{
		path: 'groupDefine', component: DefineGroupComponent
	},
	{
		path: 'groupReview', component: ReviewGroupComponent
	},
	{
		path: 'groupDetails', component: GroupDetailsComponent
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
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
