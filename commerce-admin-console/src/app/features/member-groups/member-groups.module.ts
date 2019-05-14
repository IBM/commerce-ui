import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberGroupsRoutingModule } from './member-groups-routing.module';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { DefineGroupComponent } from './components/define-group/define-group.component';
import { ReviewGroupComponent } from './components/review-group/review-group.component';
import { NFormsModule, TableModule, PaginationModule, DropdownModule, LinkModule } from 'carbon-components-angular';
import { Menu32Module } from '@carbon/icons-angular/lib/menu/32';
import { Settings16Module } from '@carbon/icons-angular/lib/settings/16';
import { Filter16Module } from '@carbon/icons-angular/lib/filter/16';
import { Search16Module } from '@carbon/icons-angular/lib/search/16';
import { Edit16Module } from '@carbon/icons-angular/lib/edit/16';
import { Locked16Module } from '@carbon/icons-angular/lib/locked/16';
import { ChevronRight16Module } from '@carbon/icons-angular/lib/chevron--right/16';
import { ArrowDown16Module } from '@carbon/icons-angular/lib/arrow--down/16';
import { Close16Module } from '@carbon/icons-angular/lib/close/16';
import { CheckmarkFilled16Module } from '@carbon/icons-angular/lib/checkmark--filled/16';
import { CheckmarkOutline16Module } from '@carbon/icons-angular/lib/checkmark--outline/16';

@NgModule({
	imports: [
		MemberGroupsRoutingModule, TranslateModule,
		CommonModule, FormsModule, ReactiveFormsModule,
		NFormsModule, TableModule, PaginationModule, DropdownModule, LinkModule,
		Menu32Module, Settings16Module, Filter16Module, Search16Module, Locked16Module, ChevronRight16Module,
		ArrowDown16Module, Close16Module, CheckmarkFilled16Module, CheckmarkOutline16Module, Edit16Module

	],
	declarations: [
		GroupListComponent,
		GroupDetailsComponent,
		DefineGroupComponent,
		ReviewGroupComponent
	]
})
export class MemberGroupsModule { }