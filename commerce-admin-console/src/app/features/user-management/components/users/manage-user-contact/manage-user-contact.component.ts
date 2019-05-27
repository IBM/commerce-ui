import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../../../../src/app/rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import { IframeService } from '../../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../../rest/services/organizations.service';
import { UserAccountPolicyDescriptionsService } from '../../../../../rest/services/user-account-policy-descriptions.service';
import { CountriesService } from '../../../../../rest/services/countries.service';
import { StatesService } from '../../../../../rest/services/states.service';

@Component({
  selector: 'app-manage-user-contact',
  templateUrl: './manage-user-contact.component.html',
  styleUrls: ['./manage-user-contact.component.scss']
})
export class ManageUserContactComponent implements OnInit {

  model: '';
  disabled: '';
  updateUser;
  items = [
    {
      content: 'Mr.',
      selected: false
    },
    {
      content: 'Mrs.',
      selected: false,
    }
  ];

  contactForm: FormGroup;
  accountData: any;
  manageUserResponse: any;
  id: number;
  userAccountData: any;
  personTitle: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  address1: FormControl;
  address2: FormControl;
  city: FormControl;
  state: FormControl;
  country: FormControl;
  zipCode: FormControl;
  private sub: any;

  selectedCountryNameAbbr: string;
  showCountryList = false;
	showStateList = false;
	countryList: Array<any> = [];
	stateList: Array<any> = [];

  constructor(
    private router: Router,
    private userService: UsersService,
    private userMainService: UserMainService,
    private iframeService: IframeService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
		private organizationsService: OrganizationsService,
    private userAccountPolicyDescriptionsService: UserAccountPolicyDescriptionsService,
    private countriesService: CountriesService,
    private statesService: StatesService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.accountData = this.userMainService.manageuserAccount;
    this.getUserApiCall();
    
    if (this.userMainService.manageUserData != null) {
			let manageUserData = this.userMainService.manageUserData;
			this.personTitle.setValue(manageUserData.address.personTitle ? manageUserData.address.personTitle : '');
			this.firstName.setValue(manageUserData.address.firstName ? manageUserData.address.firstName : '');
			this.lastName.setValue(manageUserData.address.lastName ? manageUserData.address.lastName : '');
			this.address1.setValue(manageUserData.address.address1 ? manageUserData.address.address1 : '');
			this.address2.setValue(manageUserData.address.address2 ? manageUserData.address.address2 : '');
			this.city.setValue(manageUserData.address.city ? manageUserData.address.city : '');
			this.zipCode.setValue(manageUserData.address.zipCode ? manageUserData.address.zipCode : '');
		}
		else {
			this.userMainService.manageUserData = {
					"address": {}
			};
		}
		this.initCountryList();
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

  createFormControls() {
    this.personTitle = new FormControl('');
    this.firstName = new FormControl('');
    this.lastName = new FormControl('',
    [Validators.required
    ]);
    this.address1 = new FormControl('', [
      Validators.required
    ]);
    this.address2 = new FormControl('', [
      Validators.required
    ]);
    this.city = new FormControl('', Validators.required);
    this.country = new FormControl('', Validators.required);
    this.state = new FormControl('', Validators.required);
    this.zipCode = new FormControl('', Validators.required);
  }

  createForm() {
    this.contactForm = new FormGroup({
      personTitle: this.personTitle,
      firstName: this.firstName,
      lastName: this.lastName,
      address1: this.address1,
      address2: this.address2,
      city: this.city,
      country: this.country,
      state: this.state,
      zipCode: this.zipCode
    });
  }

  private initCountryList() {
		this.countriesService.getCountries({
			languageId: -1
		}).subscribe(
			response => {
				this.countryList = response.items;
				let countryCode = this.userMainService.manageUserData.address.country;
				if (countryCode) {
					for (let i = 0; i < this.countryList.length; i++) {
						let country = this.countryList[i];
						if (country.countryAbbr === countryCode) {
							this.selectCountry(country);
							break;
						}
						else if (country.name === this.country.value) {
							this.selectCountry(country);
							break;
						}
					}
				}
			},
			error => {
				console.log(error);
			}
		);
  }
  
  private initStateList() {
		let countryCode = this.userMainService.manageUserData.address.country;
		this.stateList = [];
		if (countryCode != null && countryCode != '') {
			this.statesService.getStates({
				countryAbbr: countryCode,
				languageId: -1
			}).subscribe(
				response => {
					this.stateList = response.items;
					let stateCode = this.userMainService.manageUserData.address.state;
					if (stateCode) {
						for (let i = 0; i < this.stateList.length; i++) {
							let state = this.stateList[i];
							if (state.stateAbbr === stateCode) {
								this.selectState(state);
								break;
							}
							else if (state.name === this.state.value) {
								this.selectState(state);
								break;
							}
						}
					}
				},
				error => {
					console.log(error);
				});
		}
  }
  
  countryInputKeyup() {
		if (this.country.value !== '') {
			this.showCountryList = true;
			for (var i = 0; i < this.countryList.length; i++) {
				let country = this.countryList[i];
				if (country.name === this.country.value) {
					this.selectCountry(country);
				}
			}
		}
  }
  
  selectCountry(country: any) {
		this.country.setValue(country ? country.name : '');
		let countryCode = country != null ? country.countryAbbr : null;
		this.userMainService.manageUserData.address.country = countryCode;
		this.showCountryList = false;
		this.state.setValue("");
		this.initStateList();
  }
  
  stateInputKeyup() {
		if (this.state.value !== '') {
			this.showStateList = true;
			for (var i = 0; i < this.stateList.length; i++) {
				let state = this.stateList[i];
				if (state.name === this.state.value) {
					this.selectState(state);
				}
			}
		}
  }
  
  selectState(state: any) {
		this.state.setValue(state ? state.name : '');
		let stateCode = state != null ? state.stateAbbr : null;
		this.userMainService.manageUserData.address.state = stateCode;
		this.showStateList = false;
	}

  setModelData() {
    this.personTitle.setValue(this.manageUserResponse.personTitle.value);
    this.firstName.setValue(this.manageUserResponse.address.firstName);
    this.lastName.setValue(this.manageUserResponse.address.lastName);
    this.address1.setValue(this.manageUserResponse.address.address1);
    this.address2.setValue(this.manageUserResponse.address.address2);
    this.city.setValue(this.manageUserResponse.address.city);
    this.state.setValue(this.manageUserResponse.address.state);
    this.country.setValue(this.manageUserResponse.address.country);
    this.zipCode.setValue(this.manageUserResponse.address.zipCode);
  }

  // contactCall() {
  //   this.userAccountData = {
  //     'personTitle': this.personTitle.value,
  //     'firstName': this.firstName.value,
  //     'lastName': this.lastName.value,
  //     'streetAddress1': this.address1.value,
  //     'streetAddress2': this.address2.value,
  //     'city': this.city.value,
  //     'state': this.state.value,
  //     'country': this.country.value,
  //     'zipcode': this.zipCode.value
  //   };
  // }

  saveContact() {
    //this.contactCall();
    this.userMainService.setManageUserData(this.contactForm.value);
    this.updateUserApiCall();
    //this.router.navigate(['/users/manageRoles', this.id]);
  }

  cancelClick() {
    this.router.navigate(['/users']);
  }

  goToAccount() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageAccount', this.id]);
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

}
