import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NFormsModule, TableModule, PaginationModule, DropdownModule, IconModule } from 'carbon-components-angular';

import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsMainService } from './organizations.main.service';
import { ListOrganizationsComponent } from './list-organizations/list-organizations.component';
import { FindOrganizationsComponent } from './find-organizations/find-organizations.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NFormsModule,
		TableModule,
		PaginationModule,
		DropdownModule,
		IconModule,
		ComponentsModule,
		OrganizationsRoutingModule,
		ComponentsModule,
		TranslateModule
	],
	declarations: [
		ListOrganizationsComponent,
		FindOrganizationsComponent,
		CreateOrganizationComponent,
		EditOrganizationComponent,
		OrganizationFormComponent
	],
	providers: [
		OrganizationsMainService
	]
})
export class OrganizationsModule {}
