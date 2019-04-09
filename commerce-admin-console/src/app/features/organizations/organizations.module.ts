import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NFormsModule, TableModule, PaginationModule, DropdownModule } from 'carbon-components-angular';
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
		Menu32Module
	],
	declarations: [
		ListOrganizationsComponent,
		FindOrganizationsComponent,
		CreateOrganizationComponent,
		EditOrganizationComponent,
		OrganizationFormComponent,
		OrganizationListComponent,
    HeaderComponent
	],
	providers: [
		OrganizationMainService
	]
})
export class OrganizationsModule {}