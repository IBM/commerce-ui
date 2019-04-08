import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { UserSettingService } from '../../../services/user-setting.service';

@Component({
  selector: 'ac-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {
  disabled: '';
  userContactData: any;
  contactData: any;
  personTitle: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  zipCode: string;

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
    private userSettingService: UserSettingService) { }

  ngOnInit() {
    this.contactData = this.userMainService.userContactData;
    console.log(this.contactData);
    if (this.userSettingService.rolesBackCall) {
      this.setModelData();
    }
  }

  setModelData() {
    this.personTitle = this.contactData.personTitle;
    this.firstName = this.contactData.firstName;
    this.lastName = this.contactData.lastName;
    this.address1 = this.contactData.address1;
    this.address2 = this.contactData.address2;
    this.city = this.contactData.city;
    this.country = this.contactData.country;
    this.zipCode = this.contactData.zipCode;
  }

  goToRoles() {
    this.contactCall();
    this.userMainService.userContact(this.userContactData);
    this.router.navigate(['users/userRoles']);
    }
    backClick() {
      this.userSettingService.contactBackClick = true;
      this.router.navigate(['users/userAccount']);
    }
  cancelClick() {
    this.router.navigate(['users']);
  }

  contactCall() {
    this.userContactData = {
      'personTitle': this.personTitle,
      'firstName': this.firstName,
      'lastName': this.lastName,
      'address1': this.address1,
      'address2': this.address2,
      'city': this.city,
      'country': this.country,
      'zipCode': this.zipCode
    };
  }
}
