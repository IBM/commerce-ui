import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../../../src/app/rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import { IframeService } from '../../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

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

  accountData: any;
  manageUserResponse: any;
  id: number;
  userAccountData: any;
  firstName: any;
  lastName: any;
  streetAddress1: any;
  streetAddress2: any;
  city: any;
  state: any;
  zipcode: number;

  constructor(
    private router: Router,
    private userService: UsersService,
    private userMainService: UserMainService,
    private iframeService: IframeService,
    private translateService: TranslateService) { }

    ngOnInit() {
      this.accountData = this.userMainService.manageuserAccount;
      this.getUserApiCall();
      
    }
  
    getUserApiCall() {
      this.id = 2011;
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
      this.id = 2011;
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

    setModelData() {
      this.firstName = this.manageUserResponse.address.firstName;
      this.lastName = this.manageUserResponse.address.lastName;
      this.streetAddress1 = this.manageUserResponse.address.address1;
      this.streetAddress2 = this.manageUserResponse.address.address2;
      this.city = this.manageUserResponse.address.city;
      this.state = this.manageUserResponse.address.organizationName;
      this.zipcode = this.manageUserResponse.address.zipCode;
    }
   
    contactCall() {
      this.userAccountData = {
        'firstName': this.firstName,
        'lastName': this.lastName,
        'streetAddress1': this.streetAddress1,
        'streetAddress2': this.streetAddress2,
        'city': this.city,
        'state': this.state,
        'zipcode': this.zipcode
      };
    }

  saveContact() {
    this.contactCall();
    this.userMainService.manageUserData(this.userAccountData);
    this.updateUserApiCall();
    this.router.navigate(['/users/manageRoles']);
  }

  cancelClick() {
    this.router.navigate(['/users/manageAccount']);
  }

}
