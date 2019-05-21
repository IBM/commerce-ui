import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../../../../src/app/rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import { IframeService } from '../../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
import { UserAccountPolicyDescriptionsService } from '../../../../../rest/services/user-account-policy-descriptions.service';

@Component({
  selector: 'app-manage-user-account',
  templateUrl: './manage-user-account.component.html',
  styleUrls: ['./manage-user-account.component.scss']
})
export class ManageUserAccountComponent implements OnInit {

  accountForm: FormGroup;
	logonId: FormControl;
	email1: FormControl;
	password: FormControl;
	passwordVerify: FormControl;
	organizationName: FormControl;
  policy: FormControl;
  
  showInput: boolean;
  disabled: '';
  accountData: any;
  userAccountData: any;
  // logonId: string;
  // email1: string;
  // password: string;
  // passwordVerify: string;
  // organizationName: string;
  // policy: string;
  emailPattern: any;
  envalidEmail: boolean;
  showTextVisible = true;
  showTickboxVisible: boolean;
  manageUserResponse: any;
  showOrgList = false;
  parentOrgData: Array<string>;
	organizationListData: any;
	accountPolicyListData: any;
	accountPolicyData: Array<string>;
  id: number;
  private sub: any;

  constructor(
    private router: Router,
    private userMainService: UserMainService,
    private userService: UsersService,
    private iframeService: IframeService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
		private organizationsService: OrganizationsService,
		private userAccountPolicyDescriptionsService: UserAccountPolicyDescriptionsService) { }

  updateUser;

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

  ngOnInit() {
    this.organizationListApi();
		this.accountPolicyList();
		this.createFormControls();
		this.createForm();
    this.showInput = true;
    this.accountData = this.userMainService.manageuserAccount;
    this.getUserApiCall();
    this.enableButton();
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

  getUserApiCall() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // this.id = 2011;
    this.userMainService.getUpdateUser(this.id).then(results => {
      this.manageUserResponse = Object.assign([], results);
      this.setModelData();
      console.log("GET UPDATEUSER DATA FROM SERVICE", this.manageUserResponse);
    }).catch(() => {
      this.translateService
        .get('CATALOGS.HEADR.store_list_failed')
        .subscribe((msg: string) => {
          this.iframeService.postStatusMsg(msg, 'error');
        });
    });
  }

  updateUserApiCall() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // this.id = 2011;
    this.userMainService.updateUser(this.id).then(results => {
      this.manageUserResponse = Object.assign([], results);
      this.setModelData();
      console.log("GET UPDATEUSER DATA FROM SERVICE", this.manageUserResponse);
    }).catch(() => {
      this.translateService
        .get('CATALOGS.HEADR.store_list_failed')
        .subscribe((msg: string) => {
          this.iframeService.postStatusMsg(msg, 'error');
        });
    });
  }

  organizationListApi(): void {
    this.parentOrgData = [];
    this.organizationsService.OrganizationGetManageableOrganizations({}).subscribe(
      response => {
        this.organizationListData = response.items;
        this.parentOrgData = this.organizationListData.map(value => {
          return value.organizationName;
        });
        console.log("ORGLIST API", response);
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

  buttonEnabled: boolean = false;
  // apiLogonId: any = this.logonId;
  // userLogonId: any;
  enableButton() {
    if (this.logonId === this.logonId) {
      this.buttonEnabled = !this.buttonEnabled;
    }
    else {
      this.buttonEnabled = this.buttonEnabled;
    }
  }

  values: any;
  onChange(event: any) {
    this.values = event.target.value;
    console.log("onChange", this.values);
  };

  saveAccount() {
    this.accountCall();
    this.userMainService.manageUserData(this.userAccountData);
    this.updateUserApiCall();
    this.router.navigate(['/users/manageContact', this.id]);
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

  // getAccountData(){
  //   this.updateUser = this.userService.UsersUpdateUser;
  //   // console.log("$$$$$$$", this.updateUser);
  // }

  // resultData:any;
  // manageUserApiCall() {
  //   this.userMainService.updateUser(1005).subscribe(response=>{
  //     this.resultData = response;
  //     console.log('service', this.resultData);
  //   });
  //   this.translateService
  //     .get('CATALOGS.HEADR.store_list_failed')
  //     .subscribe((msg: string) => { 
  //       this.iframeService.postStatusMsg(msg, 'error');
  //     });
  // }

  setModelData() {
    this.logonId.setValue(this.manageUserResponse.logonId);
    this.email1.setValue(this.manageUserResponse.address.email1);
    this.password.setValue(this.manageUserResponse.password);
    this.passwordVerify.setValue(this.manageUserResponse.password);
    this.organizationName.setValue(this.manageUserResponse.parentOrganizationName);
    this.policy.setValue(this.manageUserResponse.policy);
  }

  accountCall() {
    this.userAccountData = {
      'logonId': this.logonId.value,
      'email1': this.email1.value,
      'password': this.password.value,
      'organizationName': this.organizationName.value,
      'policy': this.policy.value
    };
  }

  cancelClick() {
    this.router.navigate(['/users']);
  }

  goToContact() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageContact', this.id]);
  }

  goToRoles() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageRoles', this.id]);
  }
  goToGroups() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageGroups', this.id]);
  }
  selectAccountPolicy(event: any) {
		// this.userMainService.userData.userAccountPolicyId = event.item.userAccountPolicyId;
	}
  
  check() {
    var tocheck = ["text1", "text2", "text3", "email"];
    let tform = document.getElementById("theform");
    let ok = true;
    let i;
    for (i = 0; i < tocheck.length; i++) {
      ok = ok && tform[tocheck[i]].value != "";
    }
    document.getElementById("subm").style.color = ok ? "green" : "red";
  }

}



