import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberGroupsRoutingModule } from './member-groups-routing.module';
import { MemberGroupListComponent } from './components/member-group-list/member-group-list.component';

@NgModule({
	imports: [
		MemberGroupsRoutingModule,
		CommonModule
	],
	declarations: [
		MemberGroupListComponent
	]
})
export class MemberGroupsModule { }