import { Injectable } from '@angular/core';
import { OrganizationsService } from '../../rest/services/organizations.service';
import { IframeService } from '../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class OrganizationMainService {

  constructor(private orgService: OrganizationsService) { }

  contactBackClick: boolean;
  rolesBackCall: boolean;
  listData: any;
  resultData: any;
  orgAccountData: any;
  orgContactData: any;
  orgRolesData: any;
  orgApprovalsData: any;
  listResult: any;

  createUser(): Promise<Object> {
    this.setOrgData();
    console.log("whole data from servicee", this.listData);
    return new Promise((resolve, reject) => {
      this.orgService.OrganizationsCreateOrganizationResponse(this.listData,
      ).subscribe(response => {
        resolve(response);
        this.resultData = response;
        console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  orgaccount(data) {
    this.orgAccountData = {
      'organizationName': data.organizationName,
      'description': data.description,
      'organizationType': data.organizationType,
      'parentOrganizationId': data.parentOrganizationId
    };
    console.log("check details", this.orgAccountData);
  }
  orgContact(data) {
    this.orgContactData = {
      'contactName': data.contactName,
      'email': data.contactEmail,
      'address1': data.streetAddress,
      'address2': data.apartmentName,
      'city': data.city,
      'country': data.country,
      'state': data.state,
      'zipCode': data.zipCode,
      'phone': data.phone
    };
    console.log("check contact", this.orgContactData);
  }
  orgRoles(data) {
    this.orgRolesData = {
      availablrRoles: data.availablrRoles
    };
  }
  orgApprovals(data) {
    this.orgApprovalsData = {
      availablrRoles: data.availablrRoles
    };
  }

  setOrgData() {
    this.listData = {
      'address': {
        'address1': this.orgContactData.address1,
        'address2': this.orgContactData.address2,
        'address3': 'address 3',
        'addressType': 'SB',
        'bestCallingTime': 'D',
        'city': this.orgContactData.city,
        'country': 'India',
        'email1': this.orgAccountData.email,
        'phone': '970086',
        'zipCode': '516745',
        'state': this.orgContactData.state
      },
      'businessCategory': 'my category',
      'description': this.orgAccountData.description,
      'organizationName': this.orgAccountData.organizationName,
      'organizationType': this.orgAccountData.organizationType,
      'parentOrganizationId': -2001
    };
  }

  getUpdateOrg(id: number): Promise<Object> {
    this.id = -2001;
    return new Promise((resolve, reject) => {
      this.orgService.OrganizationsFindByOrganizationId(-2001
      ).subscribe(response => {
        resolve(response);
        this.resultData = response;
        console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  id: number;
  updateUser(id: number): Promise<Object> {
    this.id = 2001;
    return new Promise((resolve, reject) => {
      this.orgService.OrganizationsFindByOrganizationId(2001
      ).subscribe(response => {
        resolve(response);
        this.resultData = response;
        console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  manageuserAccount(data) {
    this.orgAccountData = {
      'logonId': data.logonId,
      'email1': data.email1,
      'password': data.password,
      'passwordVerify': data.passwordVerify,
      'organizationName': data.organizationName,
      'policy': data.policy
    };
  }

}