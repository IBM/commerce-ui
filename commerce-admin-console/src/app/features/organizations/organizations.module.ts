import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NFormsModule, TableModule, PaginationModule, DropdownModule, LinkModule } from 'carbon-components-angular';
import { Search16Module } from '@carbon/icons-angular/lib/search/16';
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';
import { Edit16Module } from '@carbon/icons-angular/lib/edit/16';
import { Locked16Module } from '@carbon/icons-angular/lib/locked/16';

import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationMainService } from './organization.main.service';
import { ListOrganizationsComponent } from './list-organizations/list-organizations.component';
import { FindOrganizationsComponent } from './find-organizations/find-organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { HeaderComponent } from './components/header/header.component';
import { Settings16Module } from '@carbon/icons-angular/lib/settings/16';
import { Filter16Module } from '@carbon/icons-angular/lib/filter/16';
import { Menu32Module } from '@carbon/icons-angular/lib/menu/32';
import { ManageOrganizationApprovalsComponent } from './components/manage-organization-approvals/manage-organization-approvals.component';
import { ManageOrganizationContactComponent } from './components/manage-organization-contact/manage-organization-contact.component';
import { ManageOrganizationDetailsComponent } from './components/manage-organization-details/manage-organization-details.component';
import { ManageOrganizationRolesComponent } from './components/manage-organization-roles/manage-organization-roles.component';
import { OrganizationApprovalsComponent } from './components/organization-approvals/organization-approvals.component';
import { OrganizationContactComponent } from './components/organization-contact/organization-contact.component';
import { OrganizationDetailsComponent } from './components/organization-details/organization-details.component';
import { OrganizationRolesComponent } from './components/organization-roles/organization-roles.component';
import { ChevronRight16Module } from '@carbon/icons-angular/lib/chevron--right/16';
import { ArrowDown16Module } from '@carbon/icons-angular/lib/arrow--down/16';
import { Close16Module } from '@carbon/icons-angular/lib/close/16';
import { CheckmarkFilled16Module } from '@carbon/icons-angular/lib/checkmark--filled/16';
import { View16Module } from '@carbon/icons-angular/lib/view/16';
import { ViewOff16Module } from '@carbon/icons-angular/lib/view--off/16';
import { OrganizationsMainService } from './organizations.main.service';
import { SearchPipeModule } from '../../pipes/search-pipe/search-pipe.module';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NFormsModule,
		TableModule,
		PaginationModule,
		DropdownModule,
		Search16Module,
		Edit16Module,
		CheckmarkOutline16Module,
		Locked16Module,
		ComponentsModule,
		OrganizationsRoutingModule,
		ComponentsModule,
		TranslateModule,
		Settings16Module,
		Filter16Module,
		ChevronRight16Module,
		Menu32Module,
    CheckmarkOutline16Module,
    ArrowDown16Module,
    Close16Module,
    CheckmarkFilled16Module,
    View16Module,
    ViewOff16Module,
    Settings16Module,
		Filter16Module,
		LinkModule,
		SearchPipeModule
	],
	declarations: [
		ListOrganizationsComponent,
		FindOrganizationsComponent,
		CreateOrganizationComponent,
		EditOrganizationComponent,
		OrganizationFormComponent,
		OrganizationListComponent,
		HeaderComponent,
		ManageOrganizationApprovalsComponent,
		ManageOrganizationContactComponent,
		ManageOrganizationDetailsComponent,
		ManageOrganizationRolesComponent,
		OrganizationApprovalsComponent,
		OrganizationContactComponent,
		OrganizationDetailsComponent,
		OrganizationRolesComponent,
		SearchPipe
	],
	providers: [
		OrganizationMainService, OrganizationsMainService
	]
})
export class OrganizationsModule {}