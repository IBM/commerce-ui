import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Subscription } from 'rxjs';
import { UsersService } from '../../../../../rest/services/users.service';
import { RoleAssignmentsService } from '../../../../../rest/services/role-assignments.service';
import { RoleDescriptionsService } from '../../../../../rest/services/role-descriptions.service';
import { UserMainService } from '../../../services/user-main.service';

@Component({
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	model = new TableModel();
	roleNames = null;
	roleNamesLoaded: Subject<boolean> = new Subject<boolean>();

	@ViewChild('listUserItemTemplate')
	protected listUserItemTemplate: TemplateRef<any>;
	
	@ViewChild('listUserRoleTemplate')
	protected listUserRoleTemplate: TemplateRef<any>;

	constructor(private router: Router,
		private usersService: UsersService,
		private roleAssignmentsService: RoleAssignmentsService,
		private roleDescriptionsService: RoleDescriptionsService,
		private translateService: TranslateService,
		private userMainService: UserMainService) { }

	ngOnInit() {
		const logonIdHeader = { data: '' };
		const firstNameHeader = { data: '' };
		const lastNameHeader = { data: '' };
		const organizationHeader = { data: '' };
		const roleHeader = { data: '' };
		this.translateService.get("MANAGE_USER.USER_LANDING_PAGE.LOGIN_ID").subscribe((title: string) => {
			logonIdHeader.data = title;
		});
		this.translateService.get("MANAGE_USER.USER_LANDING_PAGE.FIRST_NAME").subscribe((title: string) => {
			firstNameHeader.data = title;
		});
		this.translateService.get("MANAGE_USER.USER_LANDING_PAGE.LAST_NAME").subscribe((title: string) => {
			lastNameHeader.data = title;
		});
		this.translateService.get("MANAGE_USER.USER_LANDING_PAGE.PARENT_ORGANIZATION").subscribe((title: string) => {
			organizationHeader.data = title;
		});
		this.translateService.get("MANAGE_USER.USER_LANDING_PAGE.ROLE").subscribe((title: string) => {
			roleHeader.data = title;
		});
		this.model.header = [
			new TableHeaderItem(logonIdHeader),
			new TableHeaderItem(firstNameHeader),
			new TableHeaderItem(lastNameHeader),
			new TableHeaderItem(organizationHeader),
			new TableHeaderItem(roleHeader)
		];
		this.model.data = [];
		this.model.pageLength = 10;
		this.model.totalDataLength = 0;
		this.loadRoleNames();
		this.selectPage(1);
	}

	selectPage(page: number) {
		this.usersService.UsersGetManageableUsers({
			offset: (page - 1) * this.model.pageLength,
			limit: this.model.pageLength
		}).subscribe((body: any) => {
			this.model.totalDataLength = body.count;
			debugger
			const data = [];
			for (let i = 0; i < body.items.length; i++) {
				const item = body.items[i];
				const idTableItem = new TableItem({
					data: { name: item.logonId, id: item.id },
					template: this.listUserItemTemplate
				});
				const firstNameTableItem = new TableItem({
					data: item.address ? item.address.firstName : ''
				});
				const lastNameTableItem = new TableItem({
					data: item.address ? item.address.lastName : ''
				}); 
				const parentOrganizationTableItem = new TableItem({
					data: item.parentOrganizationName
				});
				const roleTableItem = new TableItem({
					data: [],
					template: this.listUserRoleTemplate
				});
				data.push([
					idTableItem,
					firstNameTableItem,
					lastNameTableItem,
					parentOrganizationTableItem,
					roleTableItem
				]);
				this.populateRoles(item.id, roleTableItem);
			}
			this.model.data = data;
			this.model.currentPage = page;
		});
	}

	private populateRoles(id:number, roleTableItem: TableItem) {
		debugger
		this.roleAssignmentsService.getRoleAssignments({
			memberId: id
		}).subscribe((body: any) => {
			let uniqueRoles:Array<number> = [];
			for (let i = 0; i < body.items.length; i++) {
				let roleId = body.items[i].roleId;
				if (uniqueRoles.indexOf(roleId) === -1) {
					uniqueRoles.push(roleId);
				}
			}
			if (this.roleNames != null) {
				roleTableItem.data = this.getRoleNamesFromIds(uniqueRoles);
			}
			else {
				const roleNamesLoadedSubscription: Subscription = this.roleNamesLoaded.subscribe((roleNamesLoaded: boolean) => {
					if (roleNamesLoaded) {
						roleTableItem.data = this.getRoleNamesFromIds(uniqueRoles);
						roleNamesLoadedSubscription.unsubscribe();
					}
				});
			}
		});
	}

	private getRoleNamesFromIds(roleIds:Array<number>): Array<string> {
		debugger
		let roleNames = [];
		for (let i = 0; i < roleIds.length; i++) {
			roleNames.push(this.roleNames[roleIds[i]]);
		}
		return roleNames;
	}

	private loadRoleNames() {
		debugger
		this.roleNamesLoaded.next(false);
		this.roleDescriptionsService.getRoleDescriptions({
			languageId: -1
		}).subscribe((body: any) => {
			let roleNames = {};
			for (let i = 0; i < body.items.length; i++) {
				let roleDescription = body.items[i];
				roleNames[roleDescription.roleId] = roleDescription.displayName;
			}
			this.roleNames = roleNames;
			this.roleNamesLoaded.next(true);
		});
	}
	
	createUser() {
		this.userMainService.clearData();
		this.router.navigate(['users/user-account']);
	}
}
