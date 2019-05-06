import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { UserSettingService } from '../../../services/user-setting.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
import { UserAccountPolicyDescriptionsService } from '../../../../../rest/services/user-account-policy-descriptions.service';
import { UsersService } from '../../../../../rest/services/users.service';

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
	organizationName: FormControl;
	policy: FormControl;

	organizationId: number;
	accountData: any;
	userAccountData: any;
	emailPattern: any;
	showInput: boolean;
	invalidEmail: boolean;
	showTextVisible = true;
	showTickboxVisible: boolean;
	inputFieldError: boolean;
	parentOrgData: Array<string>;
	organizationListData: any;
	accountPolicyListData: any;
	accountPolicyData: Array<string>;
	userAccountPolicyId: number;
	showOrgList = false;
	invalidLoginId = false;

	constructor(private router: Router, private userMainService: UserMainService,
			private userSettingService: UserSettingService, private formBuilder: FormBuilder,
			private organizationsService: OrganizationsService,
			private userAccountPolicyDescriptionsService: UserAccountPolicyDescriptionsService,
			private usersService: UsersService) { }

	ngOnInit() {
		this.organizationListApi();
		this.accountPolicyList();
		this.createFormControls();
		this.createForm();
		this.showInput = true;
		this.accountData = this.userMainService.userAccountData;
		if (this.userSettingService.contactBackClick) {
			this.setModelData();
			this.showTickboxVisible = true;
		} else {
			this.showTickboxVisible = false;
		}
	}

	createFormControls() {
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
		this.organizationName = new FormControl('', Validators.required);
		this.policy = new FormControl('', Validators.required);
	}

	createForm() {
		this.accountForm = new FormGroup({
			logonId: this.logonId,
			email1: this.email1,
			password: this.password,
			passwordVerify: this.passwordVerify,
			organizationName: this.organizationName,
			policy: this.policy
		});
	}

	setModelData() {
		this.logonId.setValue(this.accountData.logonId);
		this.email1.setValue(this.accountData.email1);
		this.password.setValue(this.accountData.password);
		this.passwordVerify.setValue(this.accountData.passwordVerify);
		this.organizationName.setValue(this.accountData.organizationName);
		this.policy.setValue(this.accountData.policy);
	}

	goToContact() {
		if (this.accountForm.valid) {
			this.findOrginationId();
			this.accountCall();
			this.router.navigate(['/users/userContact']);
			this.userMainService.useraccount(this.userAccountData);
		}
	}

	cancelClick() {
		this.router.navigate(['users']);
	}
accountCall() {
  this.userAccountData = {
    'logonId': this.logonId.value,
    'email1': this.email1.value,
    'password': this.password.value,
    'passwordVerify': this.passwordVerify.value,
    'organizationName': this.organizationName.value,
    'organizationId': this.organizationId,
    'policy': this.userAccountPolicyId
  };
  console.log('setData', this.userAccountData);
}

validateLogonId() {
	if (this.logonId.valid) {
		this.invalidLoginId = false;
		this.usersService.UsersGetManageableUsers({
			logonId: this.logonId.value
		}).subscribe((body: any) => {
			if (body && body.items) {
				for (let i = 0; i < body.items.length; i++) {
					const logonId = body.items[i].logonId;
					if (logonId == this.logonId.value) {
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
    this.invalidEmail = false;
  } else {
    this.invalidEmail = true;
  }
}
validateInputField() {
  if (this.accountForm.invalid) {
    this.inputFieldError = true;
  } else {
    this.inputFieldError = false;
  }
}
validatePassword() {
  if (this.passwordVerify.valid) {
    this.showTickboxVisible = true;
  } else {
    this.showTickboxVisible = false;
  }
}
showHide() {
  this.showTextVisible = !this.showTextVisible;
}

organizationListApi(): void {
  this.parentOrgData = [];
  this.organizationsService.OrganizationGetManageableOrganizations({}).subscribe(
    response => {
      this.organizationListData = response.items;
      this.parentOrgData = this.organizationListData.map(value => {
        return value.organizationName;
      });
    },
    error => {
      console.log(error);
    }
  );
}

accountPolicyList(): void {
  this.accountPolicyData = [];
  this.userAccountPolicyDescriptionsService.getUserAccountPolicyDescriptions({
    "languageId": -1
  }).subscribe(
    response => {
      this.accountPolicyListData = response.items;
      this.accountPolicyData = this.accountPolicyListData.map(value => {
        return {
          "content": value.description,
          "selected": false,
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
  if (this.organizationName.value !== '') {
      this.showOrgList = true;
  }
}

selectedOrg(event: any) {
  this.organizationName.setValue(event);
  console.log(event);
  this.showOrgList = false;
}

findOrginationId() {
  this.organizationListData.forEach(value => {
    if (value.organizationName === this.organizationName.value) {
      this.organizationId = value.organizationId;
    }
  });
}

selectAccountPolicy(event: any) {
  this.userAccountPolicyId = event.item.userAccountPolicyId;
}

}
