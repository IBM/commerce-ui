import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
import { RolesService } from '../../../../../rest/services/roles.service';
import { RoleDescriptionsService } from '../../../../../rest/services/role-descriptions.service';
import { UserMainService } from '../../../services/user-main.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoleDescriptionsService } from '../../../../../rest/services/role-descriptions.service';

@Component({
	templateUrl: './user-roles.component.html',
	styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
	rolesForm: FormGroup;
	organization: FormControl;
	availableRoles: FormControl;

	showOrgList = false;
	organizationList: Array<any> = [];
	selectedOrganization: any;
	getOrganizationsSubscription: Subscription = null;
	getAssignableRolesSubscription: Subscription = null;
	roleNames = null;
	roleNamesLoaded: Subject<boolean> = new Subject<boolean>();
	availableRoleList: Array<any> = [];
	assignedRoles: Array<{organizationName:string,roleName:string,organizationId:number,roleId:number}> = null;

	constructor(private router: Router,
			private userMainService: UserMainService,
			private organizationsService: OrganizationsService,
			private roleDescriptionsService: RoleDescriptionsService,
			private rolesService: RolesService) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
		this.loadRoleNames();
		if (this.userMainService.assignedRoles == null) {
			this.userMainService.assignedRoles = [];
		}
		this.assignedRoles = this.userMainService.assignedRoles;
	}

	createFormControls() {
		this.organization = new FormControl('');
	}

	createForm() {
		this.rolesForm = new FormGroup({
			organization: this.organization,
		});
	}
	
	private loadRoleNames() {
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

	orgInputKeyup() {
		if (this.getOrganizationsSubscription != null) {
			this.getOrganizationsSubscription.unsubscribe();
			this.getOrganizationsSubscription = null;
		}
		this.selectedOrganization = null;
		this.availableRoleList = [];
		this.getOrganizationsSubscription = this.organizationsService.OrganizationGetManageableOrganizations({
			organizationName: this.organization.value,
			limit: 10
		}).subscribe(
			response => {
				if (response.items.length === 1 && response.items[0].organizationName === this.organization.value) {
					this.selectOrganization(response.items[0]);
				}
				else {
					response.items.sort((org1, org2) => {
						let result = 0;
						if (org1.organizationName < org2.organizationName) {
							result = -1;
						}
						else if (org1.organizationName > org2.organizationName) {
							result = 1;
						}
						return result;
					});
					this.organizationList = response.items;
					this.showOrgList = true;
				}
				this.getOrganizationsSubscription = null;
			},
			error => {
				this.getOrganizationsSubscription = null;
				console.log(error);
			}
		);
	}

	selectOrganization(org: any) {
		this.organization.setValue(org.organizationName);
		this.selectedOrganization = org;
		this.showOrgList = false;
		this.loadAssignableRoles();
	}
	
	private loadAssignableRoles() {
		if (this.getAssignableRolesSubscription != null) {
			this.getAssignableRolesSubscription.unsubscribe();
			this.getAssignableRolesSubscription = null;
		}
		this.availableRoleList = [];
		this.rolesService.getAssignableRoles({
			organizationId: this.selectedOrganization.id
		}).subscribe((body: any) => {
			if (this.roleNames != null) {
				this.populateAvailableRoles(body.items);
			}
			else {
				const roleNamesLoadedSubscription: Subscription = this.roleNamesLoaded.subscribe((roleNamesLoaded: boolean) => {
					if (roleNamesLoaded) {
						this.populateAvailableRoles(body.items);
						roleNamesLoadedSubscription.unsubscribe();
					}
				});
			}
		});
	}
	
	private populateAvailableRoles(roles: Array<any>) {
		let newAvailableRoleList = [];
		for (let i = 0; i < roles.length; i++) {
			let role = roles[i];
			let roleId = role.id;
			let organizationId = this.selectedOrganization.id;
			let alreadyAssigned = false;
			for (let j = 0; j < this.assignedRoles.length; j++) {
				let assignedRole = this.assignedRoles[j];
				if (assignedRole.roleId == roleId && assignedRole.organizationId == organizationId) {
					alreadyAssigned = true;
					break;
				}
			}
			if (!alreadyAssigned) {
				newAvailableRoleList.push({
					"content": this.roleNames[role.id],
					"selected": false,
					"roleId": role.id
				});
			}
		}
		newAvailableRoleList.sort((role1, role2) => {
			let result = 0;
			if (role1.content < role2.content) {
				result = -1;
			}
			else if (role1.content > role2.content) {
				result = 1;
			}
			return result;
		});
		this.availableRoleList = newAvailableRoleList;
	}
	
	selectRole(event: any) {
		if (this.selectedOrganization && event && event.item) {
			let role = event.item;
			this.assignedRoles.push({
				organizationName: this.selectedOrganization.organizationName,
				organizationId: this.selectedOrganization.id,
				roleName: role.content,
				roleId: role.roleId
			});
			this.loadAssignableRoles();
		}
	}
	
	removeRole(assignedRole) {
		let index = this.assignedRoles.indexOf(assignedRole);
		if (index >= 0) {
			this.assignedRoles.splice(index, 1);
			this.loadAssignableRoles();
		}
	}
	
	goToGroup() {
		this.router.navigate(['users/user-groups']);
	}

	backClick() {
		this.router.navigate(['users/user-contact']);
	}

	cancelClick() {
		this.userMainService.clearData();
		this.router.navigate(['users']);
	}
}
