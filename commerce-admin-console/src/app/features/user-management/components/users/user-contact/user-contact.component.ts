import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { UserSettingService } from '../../../services/user-setting.service';
import { CountriesService } from '../../../../../rest/services/countries.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatesService } from '../../../../../rest/services/states.service';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {
  contactForm: FormGroup;
  disabled: '';
  userContactData: any;
  contactData: any;
  personTitle: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  address1: FormControl;
  address2: FormControl;
  city: FormControl;
  state: FormControl;
  country: FormControl;
  zipCode: FormControl;

  allInputValidated: boolean;
  inputFieldError: boolean;
  selectedCountryNameAbbr: string;
  showCountryList = false;
  showStateList = false;
  countryListData: any;
  countryNameList: Array<string>;
  stateListData: any;
  stateNameList: Array<string>;

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
  constructor(private router: Router, private userMainService: UserMainService,
    private userSettingService: UserSettingService, private countriesService: CountriesService,
    private statesService: StatesService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.countryList();
    this.contactData = this.userMainService.userContactData;
    if (this.userSettingService.rolesBackCall) {
      this.setModelData();
    }
  }

  createFormControls() {
    this.personTitle = new FormControl('');
    this.firstName = new FormControl('', Validators.required);
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

  setModelData() {
    this.personTitle.setValue(this.userContactData.personTitle.value);
    this.firstName.setValue(this.userContactData.firstName.value);
    this.lastName.setValue(this.userContactData.lastName.value);
    this.address1.setValue(this.userContactData.address1.value);
    this.address2.setValue(this.userContactData.address2.value);
    this.city.setValue(this.userContactData.city.value);
    this.country.setValue(this.userContactData.country.value);
    this.zipCode.setValue(this.userContactData.zipCode.value);
  }

  contactCall() {
    this.userContactData = {
      'personTitle': this.personTitle.value,
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'address1': this.address1.value,
      'address2': this.address2.value,
      'city': this.city.value,
      'country': this.country.value,
      'zipCode': this.zipCode.value
    };
    console.log('setData', this.userContactData);
  }
  goToRoles() {
    //this.validateInputField();
      //if (this.allInputValidated) {
        this.contactCall();
        this.userMainService.userContact(this.userContactData);
        this.router.navigate(['users/userRoles']);
      //}
    }
    backClick() {
      this.userSettingService.contactBackClick = true;
      this.router.navigate(['users/userAccount']);
    }
  cancelClick() {
    this.router.navigate(['users']);
  }


  countryList(): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.countriesService.getCountries({}
      ).subscribe(response => {
        resolve(response);
        this.countryListData = response.items;
        console.log('resp', response);
        this.countryNameList = this.countryListData.map(value => {
          return value.name;
        });
        console.log('this.countryNameList ', this.countryNameList );
      },  error => {
        reject();
      });
    });
  }

  stateList(): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.statesService.getStates({
        countryAbbr: this.selectedCountryNameAbbr
      }
      ).subscribe(response => {
        resolve(response);
        this.stateListData = response.items;
        console.log('stateListData ', this.stateListData );
        this.stateNameList = this.stateListData.map(value => {
          return value.name;
        });
        console.log('stateNameList ', this.stateNameList );
      },  error => {
        reject();
      });
    });
  }

  countryInputKeyup() {
    if (this.country.value !== '') {
        this.showCountryList = true;
    }
  }

  selectedCountry(countryName: string) {
    this.country.setValue(countryName);
    this.showCountryList = false;
    this.countryListData.forEach(value => {
      if (value.name === countryName) {
        this.selectedCountryNameAbbr = value.countryAbbr;
      }
    });
    this.stateList();
  }

  stateInputKeyup() {
    if (this.state.value !== '') {
        this.showStateList = true;
    }
  }

  selectedState(stateName: string) {
    this.state.setValue(stateName);
    this.showStateList = false;
  }

}
