import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { UserSettingService } from '../../../services/user-setting.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
import { element } from '@angular/core/src/render3/instructions';
import { UserAccountPoliciesService } from '../../../../../rest/services/user-account-policies.service';
import { IframeService } from '../../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ac-user-account',
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
  envalidEmail: boolean;
  showTextVisible = true;
  showTickboxVisible: boolean;
  inputFieldError: boolean;
  organizationListFocused = false;
  parentOrgData: Array<string>;
  organizationListData: any;
  accountPolicyListData: any;
  showOrgList = false;
  orgListResponse: any;
  logonIdList: any;
  userListResponse: any;
  invalidLoginId = false;


  form: FormGroup;


  items = [
    {
      content: 'Administator',
      selected: false
    },
    {
      content: 'User',
      selected: false,
    }
  ];
  constructor(private router: Router, private userMainService: UserMainService,
    private userSettingService: UserSettingService, private formBuilder: FormBuilder,
    private organizationsService: OrganizationsService, private userAccountPoliciesService: UserAccountPoliciesService,
    private iframeService: IframeService, private translateService: TranslateService) { }

  ngOnInit() {
    this.organizationListApiCall();
    this.accountPolicyList();
    this.createFormControls();
    this.createForm();
    this.getUserList();
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
    this.email1 = new FormControl('',
    [Validators.required,
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
    // this.logonId = this.accountData.logonId;
    // this.email1 = this.accountData.email1;
    // this.password = this.accountData.password;
    // this.passwordVerify = this.accountData.passwordVerify;
    // this.organizationName = this.accountData.organizationName;
    // this.policy = this.accountData.policy;
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
    console.log('form', this.accountForm.value);
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
    'policy': this.policy.value
  };
  console.log('setData', this.userAccountData);
}

validateEmail() {
  if (this.email1.valid) {
    this.envalidEmail = false;
  } else {
    this.envalidEmail = true;
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

// organizationListApi(): Promise<Object> {
//   this.parentOrgData = [];
//   return new Promise((resolve, reject) => {
//     this.organizationsService.OrganizationGetManageableOrganizations({}
//     ).subscribe(response => {
//       resolve(response);
//       this.organizationListData = response.items;
//       this.parentOrgData = this.organizationListData.map(value => {
//         return value.parentOrganizationName;
//       });
//       console.log('response', this.parentOrgData);
//       this.organizationListFocused = true;
//     },  error => {
//       reject();
//     });
//   });
// }

organizationListApiCall() {
  this.parentOrgData = [];
  this.userMainService.organizationListApi().then(results => {
  this.orgListResponse = Object.assign([], results);
  console.log('from component', this.orgListResponse);
  this.organizationListData = this.orgListResponse.items;
        this.parentOrgData = this.organizationListData.map(value => {
          return value.parentOrganizationName;
        });
        this.organizationListFocused = true;
}).catch(() => {
this.translateService
    .get('CATALOGS.HEADR.store_list_failed')
    .subscribe((msg: string) => {
      this.iframeService.postStatusMsg(msg, 'error');
    });
});
}

getUserList() {
  this.userMainService.userList().then(results => {
  this.userListResponse = Object.assign([], results);
  this.logonIdList = this.userListResponse.items.map(value => {
    return value.logonId.toLowerCase();
  });
  console.log('this.logonIdList', this.logonIdList);
}).catch(() => {
this.translateService
    .get('CATALOGS.HEADR.store_list_failed')
    .subscribe((msg: string) => {
      this.iframeService.postStatusMsg(msg, 'error');
    });
});
}
validateLogonId(logonid) {
if (this.logonIdList.indexOf(logonid.toLowerCase()) === -1) {
  this.invalidLoginId = false;
} else {
  this.invalidLoginId = true;
}
}

accountPolicyList(): Promise<Object> {
  return new Promise((resolve, reject) => {
    this.userAccountPoliciesService.getUserAccountPolicies({}
    ).subscribe(response => {
      resolve(response);
      this.accountPolicyListData = response;
      console.log('this.organizationListData ', this.accountPolicyListData );
    },  error => {
      reject();
    });
  });
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
    if (value.parentOrganizationName === this.organizationName.value) {
    this.organizationId = value.parentOrganizationId;
    }
  });
}

}
