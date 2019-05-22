import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationMainService } from '../../organization.main.service';
import { CountriesService } from '../../../../rest/services/countries.service';
import { StatesService } from '../../../../rest/services/states.service';

export class User {


  constructor(public contactName: string,
    public contactEmail: string,
    public streetAddress: string,
    public apartmentName: string,
    public city: string,
    public country: string,
    public state: string,
    public zipCode: string) {
  }
}

@Component({
  selector: 'app-organization-contact',
  templateUrl: './organization-contact.component.html',
  styleUrls: ['./organization-contact.component.scss']
})
export class OrganizationContactComponent implements OnInit {

  showCountryList: boolean = false;
  showStateList: boolean = false;
  countryList: Array<any> = [];
  stateList: Array<any> = [];
  orgContactData: any;
  contactData: any;

  contactForm: FormGroup;
  firstName: FormControl;
	email1: FormControl;
	address1: FormControl;
	address2: FormControl;
	city: FormControl;
	state: FormControl;
	country: FormControl;
	zipCode: FormControl;
      
  @Output() loggedIn = new EventEmitter<User>();
  constructor(private router: Router, private countriesService: CountriesService,
    private _fb: FormBuilder, private orgMainService: OrganizationMainService,
    private statesService: StatesService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.initCountryList();

    if (this.orgMainService.organizationData != null) {
			let organizationData = this.orgMainService.organizationData;
			this.firstName.setValue(organizationData.address.firstName ? organizationData.address.firstName : '');
			this.email1.setValue(organizationData.address.email1 ? organizationData.address.email1 : '');
			this.address1.setValue(organizationData.address.address1 ? organizationData.address.address1 : '');
			this.address2.setValue(organizationData.address.address2 ? organizationData.address.address2 : '');
			this.city.setValue(organizationData.address.city ? organizationData.address.city : '');
			this.zipCode.setValue(organizationData.address.zipCode ? organizationData.address.zipCode : '');
		}
		else {
			this.orgMainService.organizationData = {
					"address": {}
			};
    }
    
    // this.contactForm = this._fb.group({
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
		this.contactForm = new FormGroup({
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
  
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  routeOrganizationDetails() {
    this.orgMainService.contactBackClick = true;
    this.router.navigate(['organizations/organizationsDetails']);
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.loggedIn.emit(
        new User(
          this.contactForm.value.contactName,
          this.contactForm.value.contactEmail,
          this.contactForm.value.streetAddress,
          this.contactForm.value.apartmentName,
          this.contactForm.value.city,
          this.contactForm.value.country,
          this.contactForm.value.state,
          this.contactForm.value.zipCode,
        )
      );
    }
    this.contactCall();
        this.orgMainService.orgContact(this.orgContactData);
    this.router.navigate(['organizations/organizationsRoles']);
  }
  
    

  contactCall() {
    this.orgContactData = this.contactForm.value;
    // {
    //   'contactName': this.contactName.value,
    //   'contactEmail': this.contactEmail.value,
    //   'streetAddress': this.streetAddress.value,
    //   'address1': this.apartmentName.value,
    //   'city': this.city.value,
    //   'country': this.country.value,
    //   'zipCode': this.zipCode.value,
    //   'state': this.state.value
    // };
    console.log("set contact", this.orgContactData);
  }

  countryInputKeyup() {
    debugger
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
				let countryCode = this.orgMainService.organizationData.address.country;
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
		let countryCode = this.orgMainService.organizationData.address.country;
		this.stateList = [];
		if (countryCode != null && countryCode != '') {
			this.statesService.getStates({
				countryAbbr: countryCode,
				languageId: -1
			}).subscribe(
				response => {
					this.stateList = response.items;
					let stateCode = this.orgMainService.organizationData.address.state;
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
		this.orgMainService.organizationData.address.country = countryCode;
		this.showCountryList = false;
		this.state.setValue("");
		this.initStateList();
  }
  selectState(state: any) {
		this.state.setValue(state ? state.name : '');
		let stateCode = state != null ? state.stateAbbr : null;
		this.orgMainService.organizationData.address.state = stateCode;
		this.showStateList = false;
	}
  
}
