import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
import { UserAccountPolicyDescriptionsService } from '../../../../../rest/services/user-account-policy-descriptions.service';
import { UsersService } from '../../../../../rest/services/users.service';
import { Subscription } from 'rxjs';

@Component({
	templateUrl: './user-account.component.html',
	styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
	accountForm: FormGroup;
	logonId: FormControl;
	email1: FormControl;
	password: FormControl;
	passwordVerify: FormControl;
	parentOrganization: FormControl;
	policy: FormControl;

	emailPattern: any;
	invalidEmail: boolean;
	passwordVisible = false;
	invalidPassword: boolean;
	inputFieldError: boolean = false;
	organizationList: Array<any> = [];
	accountPolicyList: Array<any>;
	showOrgList = false;
	invalidLoginId = false;
	getOrganizationsSubscription: Subscription = null;

	constructor(private router: Router, private userMainService: UserMainService,
			private organizationsService: OrganizationsService,
			private userAccountPolicyDescriptionsService: UserAccountPolicyDescriptionsService,
			private usersService: UsersService) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
		if (this.userMainService.userData != null) {
			let userData = this.userMainService.userData;
			this.logonId.setValue(userData.logonId);
			this.email1.setValue(userData.address.email1);
			this.password.setValue(userData.password);
			this.passwordVerify.setValue(userData.passwordVerify);
			this.parentOrganization.setValue(userData.parentOrganizationName);
			this.invalidPassword = false;
		} else {
			this.userMainService.userData = {
				"address": {}
			};
			this.invalidPassword = true;
		}
		this.initAccountPolicyList();
	}

	private createFormControls() {
		this.logonId = new FormControl('', Validators.required);
		this.email1 = new FormControl('', [
			Validators.required,
			Validators.pattern('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+')
		]);
		this.password = new FormControl('', [
			Validators.required,
			Validators.minLength(8)
		]);
		this.passwordVerify = new FormControl('', [
			Validators.required,
			Validators.minLength(8)
		]);
		this.parentOrganization = new FormControl('', Validators.required);
		this.policy = new FormControl('', Validators.required);
	}

	private createForm() {
		this.accountForm = new FormGroup({
			logonId: this.logonId,
			email1: this.email1,
			password: this.password,
			passwordVerify: this.passwordVerify,
			parentOrganization: this.parentOrganization,
			policy: this.policy
		});
	}

	goToContact() {
		if (this.accountForm.valid && !this.invalidLoginId && this.userMainService.userData.parentOrganizationId != null && !this.invalidPassword) {
			this.router.navigate(['/users/user-contact']);
		}
		else {
			this.inputFieldError = true;
		}
	}

	cancelClick() {
		this.userMainService.clearData();
		this.router.navigate(['users']);
	}

	validateLogonId() {
		if (this.logonId.valid) {
			this.userMainService.userData.logonId = this.logonId.value;
			this.invalidLoginId = false;
			this.usersService.UsersGetManageableUsers({
				logonId: this.logonId.value
			}).subscribe((body: any) => {
				if (body && body.items) {
					for (let i = 0; i < body.items.length; i++) {
						const logonId = body.items[i].logonId;
						if (logonId === this.logonId.value) {
							this.invalidLoginId = true;
							break;
						}
					}
				}
			});
		}
		else {
			this.invalidLoginId = true;
		}
	}

	validateEmail() {
		if (this.email1.valid) {
			this.userMainService.userData.address.email1 = this.email1.value;
			this.invalidEmail = false;
		}
		else {
			this.invalidEmail = true;
		}
	}

	validatePassword() {
		if (this.password.valid && this.passwordVerify.valid && this.password.value === this.passwordVerify.value) {
			this.userMainService.userData.password = this.password.value;
			this.userMainService.userData.passwordVerify = this.passwordVerify.value;
			this.invalidPassword = false;
		}
		else {
			this.invalidPassword = true;
		}
	}

	showPassword() {
		this.passwordVisible = true;
	}

	hidePassword() {
		this.passwordVisible = false;
	}

	private initAccountPolicyList(): void {
		this.accountPolicyList = [];
		this.userAccountPolicyDescriptionsService.getUserAccountPolicyDescriptions({
			"languageId": -1
		}).subscribe(
			response => {
				this.accountPolicyList = response.items.map(value => {
					return {
						"content": value.description,
						"selected": this.userMainService.userData.userAccountPolicyId === value.userAccountPolicyId,
						"userAccountPolicyId": value.userAccountPolicyId
					}
				});
			},
			error => {
				console.log(error);
			}
		);
	}

	orgInputKeyup() {
		if (this.getOrganizationsSubscription != null) {
			this.getOrganizationsSubscription.unsubscribe();
			this.getOrganizationsSubscription = null;
		}
		this.userMainService.userData.parentOrganizationId = null;
		this.userMainService.userData.parentOrganizationName = null;
		this.getOrganizationsSubscription = this.organizationsService.OrganizationGetManageableOrganizations({
			organizationName: this.parentOrganization.value,
			limit: 10
		}).subscribe(
			response => {
				if (response.items.length === 1 && response.items[0].organizationName === this.parentOrganization.value) {
					this.selectParentOrganization(response.items[0]);
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

	selectParentOrganization(org: any) {
		this.parentOrganization.setValue(org.organizationName);
		this.userMainService.userData.parentOrganizationId = org.id;
		this.userMainService.userData.parentOrganizationName = org.organizationName;
		this.showOrgList = false;
	}

	selectAccountPolicy(event: any) {
		this.userMainService.userData.userAccountPolicyId = event.item.userAccountPolicyId;
	}
}
