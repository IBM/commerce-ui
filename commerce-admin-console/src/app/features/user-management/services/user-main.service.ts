import { Injectable } from '@angular/core';
import { UsersService } from '../../../rest/services/users.service';
import { IframeService } from '../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UserMainService {
  listData: any;
  resultData: any;
  userAccountData: any;
  userContactData: any;
  userRolesData: any;
  listResult: any;
  manageuserAccountData: any;
  id: number;

  constructor(private userService: UsersService,
    private iframeService: IframeService,
    private translateService: TranslateService) { }

  // createUser(): Promise<Object> {
  //   this.setUserData();
  //   console.log(this.listData);
  //   return new Promise((resolve, reject) => {
  //     this.userService.UsersCreateUser({
  //       body: this.listData,
  //       offset: 0,
  //       limit: 2
  //     }).subscribe(response => {
  //       resolve(response);
  //       this.resultData = response;
  //       console.log('service', this.resultData);
  //     },  error => {
  //       reject();
  //     });
  //   });
  // }

  userList(): Promise<object> {
    return new Promise((resolve, reject) => {
      this.userService.UsersGetManageableUsers({
      }).
        subscribe(response => {
          resolve(response);
          this.listResult = response;
          console.log('service', response);
        }, error => {
          reject();
        });
    });
  }

  createUser(): Promise<Object> {
    this.setUserData();
    console.log(this.listData);
    return new Promise((resolve, reject) => {
      this.userService.UsersCreateUserResponse(this.listData,
      ).subscribe(response => {
        resolve(response);
        this.resultData = response;
        console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  useraccount(data) {
    this.userAccountData = {
      'logonId': data.logonId,
      'email1': data.email1,
      'password': data.password,
      'passwordVerify': data.passwordVerify,
      'organizationId': data.organizationId,
      'organizationName': data.organizationName,
      'policy': data.policy
    };
  }
  userContact(data) {
    this.userContactData = {
      'personTitle': data.personTitle,
      'firstName': data.firstName,
      'lastName': data.lastName,
      'address1': data.address1,
      'address2': data.address2,
      'city': data.city,
      'country': data.country,
      'zipCode': data.zipCode
    };
  }
  userRoles(data) {
    this.userRolesData = {
      availablrRoles: data.availablrRoles
    };
  }

  setUserData() {
    // this.listData = {
    //   "address": {
    //     "address1": "address 1",
    //     "address2": "address 2",
    //     "address3": "address 3",
    //     "addressType": "SB",
    //     "bestCallingTime": "D",
    //     "businessTitle": "Director",
    //     "city": "Toronto",
    //     "country": "Canada",
    //     "email1": "bbaker@ca.ibm.com",
    //     "firstName": "Bruce",
    //     "lastName": "Baker",
    //     "state": "ON"
    //   },
    //   "logonId": "asu00",
    //   "organizationId": -2001,
    //   "password": "wcs1admin",
    //   "passwordVerify": "wcs1admin"
    //  }
    this.listData = {
      'address': {
        'address1': this.userContactData.address1,
        'address2': this.userContactData.address2,
        'address3': 'address 3',
        'addressType': 'SB',
        'bestCallingTime': 'D',
        'businessTitle': 'Director',
        'city': this.userContactData.city,
        'country': this.userContactData.country,
        'email1': this.userAccountData.email1,
        'personTitle': this.userAccountData.personTitle,
        'firstName': this.userContactData.firstName,
        'lastName': this.userContactData.lastName,
        'state': 'ON',
      },
      'logonId': this.userAccountData.logonId,
      'password': this.userAccountData.password,
      'passwordVerify': this.userAccountData.passwordVerify,
      'organizationId': this.userAccountData.organizationId,
      'organizationName': this.userAccountData.organizationName,
    };
  }

  userBody: any;
  manageUserData(data) {
    this.userBody = {
      'logonId': data.logonId,
      'email1': data.email1,
      'organizationName': data.organizationName,
      'password': data.password,
      'firstName': data.firstName,
      'lastName': data.lastName,
      'streetAddress1': data.address1,
      'streetAddress2': data.address2,
      'state': data.state,
      'city': data.city,
      'country': data.country,
      'zipcode': data.zipcode
    };
  }

  getUpdateUser(id: number): Promise<Object> {
    this.id = 2011;
    return new Promise((resolve, reject) => {
      this.userService.UsersFindByUserId(2011
      ).subscribe(response => {
        resolve(response);
        this.resultData = response;
        console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  updateUser(id: number): Promise<Object> {
    this.id = 2011;
    return new Promise((resolve, reject) => {
      console.log('Inside Promise method');
      this.userService.UsersUpdateUser({
        id: this.id,
        body: this.userBody
      }).subscribe(response => {
        console.log('service', response);
        resolve(response);
        this.resultData = response;
        // console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  manageuserAccount(data) {
    this.manageuserAccountData = {
      'logonId': data.logonId,
      'email1': data.email1,
      'password': data.password,
      'organizationName': data.organizationName
    };
  }

}
