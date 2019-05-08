import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from '../../../../../rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';

@Component({
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
	model = new TableModel();

	@ViewChild('listUserItemTemplate')
	protected listUserItemTemplate: TemplateRef<any>;

	constructor(private router: Router,
		private usersService: UsersService,
		private translateService: TranslateService) { }

	userListData: any;
	id: any;

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
		this.translateService.get("MANAGE_USER.USER_LANDING_PAGE.ORGANIZATION").subscribe((title: string) => {
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
		this.selectPage(1);
	}

	selectPage(page: number) {
		this.usersService.UsersGetManageableUsers({
			offset: (page - 1) * this.model.pageLength,
			limit: this.model.pageLength
		}).subscribe((body: any) => {
			this.userListData = body.items;
			this.model.totalDataLength = body.count;
			const data = [];
			for (let i = 0; i < body.items.length; i++) {
				const item = body.items[i];
				const id = item.id;
				const logonId = item.logonId;
				const firstName = item.address ? item.address.firstName : '';
				const lastName = item.address ? item.address.lastName : '';
				const parentOrganizationName = item.parentOrganizationName;
				data.push([
					new TableItem({ data: { name: logonId, id: id }, template: this.listUserItemTemplate }),
					new TableItem({ data: firstName }),
					new TableItem({ data: lastName }),
					new TableItem({ data: parentOrganizationName }),
					new TableItem({ data: '' })
				]);
			}
			this.model.data = data;
			this.model.currentPage = page;
		});
	}

	getSelectedUser(name) {
		this.userListData.forEach(value => {
			if (value.logonId === name) {
				this.id = value.id;
			}
		})
		console.log("ID IS.....", this.id);
		this.router.navigate(['users/manageAccount', this.id]);

	}

	createUser() {
		this.userMainService.userData = null;
		this.router.navigate(['users/user-account']);
	}
}
