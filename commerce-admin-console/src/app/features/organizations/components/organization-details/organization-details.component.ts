import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../rest/services/organizations.service';
import { OrganizationMainService } from '../../organization.main.service';
@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {
  userForm: FormGroup;
  disabled: boolean;
  model: string;
  organizationName: any;
  description: any;
  organizationType: any;
  parentOrganizationId: any;
  accountData: any;

  orgAccountData: any;


  orgList = [
    {
      content: 'O',
      selected: false
    },
    {
      content: 'OU',
      selected: false,
    }
  ];
  constructor(private router: Router, private fb: FormBuilder, private orgMainService: OrganizationMainService) { }
  ngOnInit() {
    this.createForm();
    this.accountData = this.orgMainService.orgAccountData;
    
  //   if (this.orgMainService.contactBackClick) {
  //     this.setModelData();
  // }
}
  createForm() {
    this.userForm = new FormGroup({
      organizationName: new FormControl(),
      description: new FormControl(),
      organizationType: new FormControl(),
      parentOrganizationId: new FormControl()
    });
   }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  // routeOrganizationContact() {
  //   this.router.navigate(['organizations/organizationContact']);
  // }
  onSubmit() {
    if (this.userForm.valid) {
    this.accountCall();
      this.router.navigate(['organizations/organizationContact']);
      this.orgMainService.orgaccount(this.orgAccountData);
    }
      console.log('form', this.userForm.value);
  }
  
  // setModelData() {
  //   this.organizationName.setValue(this.accountData.organizationName);
  //   this.description.setValue(this.accountData.description);
  //   this.organizationType.setValue(this.accountData.organizationType);
  //   this.parentOrganizationId.setValue(this.accountData.parentOrganizationId);
  // }
  // goToContact() {
  //   //if (this.userForm.valid) {
  //     this.accountCall();
  //     this.router.navigate(['organizations/organizationContact']);
  //     this.orgMainService.orgaccount(this.orgAccountData);
  //   //}
  //   console.log('form', this.userForm.value);
  // }
  
  accountCall() {
  this.orgAccountData = this.userForm.value;
  // {
  //   'organizationName': this.organizationName.value,
  //   'description': this.description,
  //   'organizationType': this.organizationType,
  //   'parentOrganizationId': this.parentOrganizationId,
  // };
  console.log('setData', this.orgAccountData);
  }
}

