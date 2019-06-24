import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationsService } from '../../../../../../src/app/rest/services/organizations.service';
import { OrganizationMainService } from '../../organization.main.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { IframeService } from '../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';
import { CountriesService } from '../../../../rest/services/countries.service';
import { StatesService } from '../../../../rest/services/states.service';

export class ManageUserContact {
  constructor(public contactName: string,
    public contactEmail: string,
    public streetAddress: string,
    public apartmentName: string,
    public city: string,
    public state: string) {
  }
}
@Component({
  selector: 'app-manage-organization-contact',
  templateUrl: './manage-organization-contact.component.html',
  styleUrls: ['./manage-organization-contact.component.scss']
})
export class ManageOrganizationContactComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<ManageUserContact>();

  showCountryList: boolean = false;
  showStateList: boolean = false;
  countryList: Array<any> = [];
  stateList: Array<any> = [];
  orgContactData: any;
  manageOrgResponse: any;
  id: number;
  private sub: any;

  manageContactForm: FormGroup;
  firstName: FormControl;
	email1: FormControl;
	address1: FormControl;
	address2: FormControl;
	city: FormControl;
	state: FormControl;
	country: FormControl;
	zipCode: FormControl;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private OrgService: OrganizationsService,
    private orgMainService: OrganizationMainService,
    private iframeService: IframeService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private statesService: StatesService
  ) { }

  ngOnInit() {
    this.getOrgApiCall();

    this.createFormControls();
    this.createForm();
    this.initCountryList();
    if (this.orgMainService.manageOrganizationData != null) {
			let manageOrganizationData = this.orgMainService.manageOrganizationData;
			this.firstName.setValue(manageOrganizationData.address.firstName ? manageOrganizationData.address.firstName : '');
			this.email1.setValue(manageOrganizationData.address.email1 ? manageOrganizationData.address.email1 : '');
			this.address1.setValue(manageOrganizationData.address.address1 ? manageOrganizationData.address.address1 : '');
			this.address2.setValue(manageOrganizationData.address.address2 ? manageOrganizationData.address.address2 : '');
			this.city.setValue(manageOrganizationData.address.city ? manageOrganizationData.address.city : '');
			this.zipCode.setValue(manageOrganizationData.address.zipCode ? manageOrganizationData.address.zipCode : '');
		}
		else {
			this.orgMainService.manageOrganizationData = {
					"address": {}
			};
    }
    // this.manageContactForm = this._fb.group({
    //   contactName: ['', [
    //     Validators.required,
    //     Validators.minLength(4),
    //     Validators.maxLength(10)]],
    //   contactEmail: ['', [
    //     Validators.required,
    //     Validators.pattern('[^ @]*@[^ @]*')]],
    //   streetAddress: [],
    //   apartmentName: [],
    //   city: [],
    //   country: [],
    //   state: [],
    //   zipCode: []
    // });
  }

  private createFormControls() {
		this.firstName = new FormControl('');
		this.email1 = new FormControl('', Validators.required);
		this.address1 = new FormControl('', Validators.required);
		this.address2 = new FormControl('');
		this.city = new FormControl('', Validators.required);
		this.country = new FormControl('', Validators.required);
		this.state = new FormControl('');
		this.zipCode = new FormControl('');
  }
  
  private createForm() {
		this.manageContactForm = new FormGroup({
			firstName: this.firstName,
			email1: this.email1,
			address1: this.address1,
			address2: this.address2,
			city: this.city,
			country: this.country,
			state: this.state,
			zipCode: this.zipCode
		});
  }

  getOrgApiCall() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("CHECKING ROUTE PARAMS", this.id);
    });
    // this.id = -2011;
    this.orgMainService.getUpdateOrg(this.id).then(results => {
      this.manageOrgResponse = Object.assign([], results);
      this.setModelData();
      console.log("GET UPDATEUSER DATA FROM SERVICE", this.manageOrgResponse);
    }).catch(() => {
      this.translateService
        .get('CATALOGS.HEADR.store_list_failed')
        .subscribe((msg: string) => {
          this.iframeService.postStatusMsg(msg, 'error');
        });
    });
  }

  updateOrgApiCall() {
    // this.id = -2001;
    this.orgMainService.updateOrg(this.id).then(results => {
      console.log("this.orgMainService.updateOrg(this.id)", this.id);
      this.manageOrgResponse = Object.assign([], results);
      this.setModelData();
      console.log("updateOrgApiCall FROM SERVICE", this.id, this.manageOrgResponse);
    }).catch(() => {
      this.translateService
        .get('CATALOGS.HEADR.store_list_failed')
        .subscribe((msg: string) => {
          this.iframeService.postStatusMsg(msg, 'error');
        })
    })
  }

  setModelData() {
    this.firstName.setValue(this.manageOrgResponse.organizationName);
    this.email1.setValue(this.manageOrgResponse.address.email1);
    this.address1.setValue(this.manageOrgResponse.address.address1);
    this.address2.setValue(this.manageOrgResponse.address.address2);
    this.city.setValue(this.manageOrgResponse.address.city);
    this.state.setValue(this.manageOrgResponse.address.state);
    this.country.setValue(this.manageOrgResponse.address.country);
    this.zipCode.setValue(this.manageOrgResponse.address.zipCode);
  }

  // contactCall() {
  //   this.orgContactData = {
  //     'contactName': this.contactName,
  //     'contactEmail': this.contactEmail,
  //     'streetAddress1': this.streetAddress1,
  //     'streetAddress2': this.streetAddress2,
  //     'city': this.city,
  //     'state': this.state,
  //     'country': this.country,
  //     'zipCode': this.zipCode
  //   };
  // }

  onSubmit() {
    console.log(this.manageContactForm.value);
    if (this.manageContactForm.valid) {
      this.loggedIn.emit(
        new ManageUserContact(
          this.manageContactForm.value.contactName,
          this.manageContactForm.value.contactEmail,
          this.manageContactForm.value.streetAddress,
          this.manageContactForm.value.apartmentName,
          this.manageContactForm.value.city,
          this.manageContactForm.value.state,
        )
      );
    }
    //this.contactCall();
    this.orgMainService.manageOrgData(this.manageContactForm.value);
    this.updateOrgApiCall();
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }

  routeManageOrganizationDetails() {
    this.router.navigate(['organizations/manageOrganizationDetails']);
  }
  routeManageOrganizationRoles() {
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
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
  
  private initCountryList() {
		this.countriesService.getCountries({
			languageId: -1
		}).subscribe(
			response => {
				this.countryList = response.items;
				let countryCode = this.orgMainService.manageOrganizationData.address.country;
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
		let countryCode = this.orgMainService.manageOrganizationData.address.country;
		this.stateList = [];
		if (countryCode != null && countryCode != '') {
			this.statesService.getStates({
				countryAbbr: countryCode,
				languageId: -1
			}).subscribe(
				response => {
					this.stateList = response.items;
					let stateCode = this.orgMainService.manageOrganizationData.address.state;
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
  
  selectCountry(country: any) {
		this.country.setValue(country ? country.name : '');
		let countryCode = country != null ? country.countryAbbr : null;
		this.orgMainService.manageOrganizationData.address.country = countryCode;
		this.showCountryList = false;
		this.state.setValue("");
		this.initStateList();
  }
  selectState(state: any) {
		this.state.setValue(state ? state.name : '');
		let stateCode = state != null ? state.stateAbbr : null;
		this.orgMainService.manageOrganizationData.address.state = stateCode;
		this.showStateList = false;
	}

}
