import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { CountriesService } from '../../../../../rest/services/countries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatesService } from '../../../../../rest/services/states.service';

@Component({
	templateUrl: './user-contact.component.html',
	styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {
	contactForm: FormGroup;
	personTitle: FormControl;
	firstName: FormControl;
	lastName: FormControl;
	address1: FormControl;
	address2: FormControl;
	city: FormControl;
	state: FormControl;
	country: FormControl;
	zipCode: FormControl;

	inputFieldError: boolean;
	showCountryList = false;
	showStateList = false;
	countryList: Array<any> = [];
	stateList: Array<any> = [];

	constructor(private router: Router, private userMainService: UserMainService,
			private countriesService: CountriesService,
			private statesService: StatesService) { }

	ngOnInit() {
		this.createFormControls();
		this.createForm();
		if (this.userMainService.userData != null) {
			let userData = this.userMainService.userData;
			this.personTitle.setValue(userData.address.personTitle ? userData.address.personTitle : '');
			this.firstName.setValue(userData.address.firstName ? userData.address.firstName : '');
			this.lastName.setValue(userData.address.lastName ? userData.address.lastName : '');
			this.address1.setValue(userData.address.address1 ? userData.address.address1 : '');
			this.address2.setValue(userData.address.address2 ? userData.address.address2 : '');
			this.city.setValue(userData.address.city ? userData.address.city : '');
			this.zipCode.setValue(userData.address.zipCode ? userData.address.zipCode : '');
		}
		else {
			this.userMainService.userData = {
					"address": {}
			};
		}
		this.initCountryList();
	}

	private createFormControls() {
		this.personTitle = new FormControl('');
		this.firstName = new FormControl('', Validators.required);
		this.lastName = new FormControl('', Validators.required);
		this.address1 = new FormControl('', Validators.required);
		this.address2 = new FormControl('');
		this.city = new FormControl('', Validators.required);
		this.country = new FormControl('', Validators.required);
		this.state = new FormControl('');
		this.zipCode = new FormControl('');
	}

	private createForm() {
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

	goToRoles() {
		if (this.contactForm.valid) {
			this.router.navigate(['users/user-roles']);
		}
		else {
			this.inputFieldError = true;
		}
	}
	
	backClick() {
		this.router.navigate(['users/user-account']);
	}

	cancelClick() {
		this.userMainService.clearData();
		this.router.navigate(['users']);
	}

	private initCountryList() {
		this.countriesService.getCountries({
			languageId: -1
		}).subscribe(
			response => {
				this.countryList = response.items;
				let countryCode = this.userMainService.userData.address.country;
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
		let countryCode = this.userMainService.userData.address.country;
		this.stateList = [];
		if (countryCode != null && countryCode != '') {
			this.statesService.getStates({
				countryAbbr: countryCode,
				languageId: -1
			}).subscribe(
				response => {
					this.stateList = response.items;
					let stateCode = this.userMainService.userData.address.state;
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

	validatePersonTitle() {
		this.userMainService.userData.address.personTitle = this.personTitle.value;
	}

	validateFirstName() {
		this.userMainService.userData.address.firstName = this.firstName.value;
	}

	validateLastName() {
		this.userMainService.userData.address.lastName = this.lastName.value;
	}

	validateAddress1() {
		this.userMainService.userData.address.address1 = this.address1.value;
	}

	validateAddress2() {
		this.userMainService.userData.address.address2 = this.address2.value;
	}

	validateCity() {
		this.userMainService.userData.address.city = this.city.value;
	}

	validateZipCode() {
		this.userMainService.userData.address.zipCode = this.zipCode.value;
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
		this.userMainService.userData.address.country = countryCode;
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
		this.userMainService.userData.address.state = stateCode;
		this.showStateList = false;
	}
}
