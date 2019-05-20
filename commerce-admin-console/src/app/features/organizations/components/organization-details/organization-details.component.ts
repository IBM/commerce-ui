import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../rest/services/organizations.service';
import { OrganizationMainService } from '../../organization.main.service';
import { Subscription } from 'rxjs';

// export class DetailsOrganization {
//   constructor(
//     public organizationName: string,
//     public description: string,
//     public organizationType: string,
//     public parentOrganizationId: string
//   ) {
//   }
// }

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})


export class OrganizationDetailsComponent implements OnInit {
  // userForm: FormGroup;
  detailsForm: FormGroup;
  organizationName: FormControl;
    description: FormControl;
    organizationType: FormControl;
    parentOrganizationId: FormControl;
  disabled: boolean;
  model: string;
  accountData: any;
  orgAccountData: any;
  showOrgList: boolean;
  parentOrgData: Array<string>;
  organizationList: any;
  getOrganizationsSubscription: Subscription = null;


  //@Output() loggedIn = new EventEmitter<DetailsOrganization>();

  
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

 
  
  // userForm = new FormGroup({
  //   organizationName: new FormControl(),
  //   description: new FormControl(),
  //   organizationType: new FormControl(),
  //   searchOrganization: new FormControl()
  // });
  

  constructor(private router: Router, private fb: FormBuilder,
    private orgMainService: OrganizationMainService,
    private organizationsService: OrganizationsService) { }

  ngOnInit() {
    this.createFormControls();
		this.createForm();
    //this.organizationListApi();
    this.accountData = this.orgMainService.orgAccountData;
    //   if (this.orgMainService.contactBackClick) {
    //     this.setModelData();
    // }

    // this.detailsForm = this.fb.group({
    //   organizationName: ['', [
    //     Validators.required]],
    //   description: [],
    //   organizationType: [],
    //   parentOrganizationId: []
    // });
  }

  private createFormControls() {

    this.organizationName = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [
      Validators.required
    ]);
    this.organizationType = new FormControl('', [
      Validators.required
    ]);
    this.parentOrganizationId = new FormControl('', [
      Validators.required
    ]);
  }

  private createForm() {
    this.detailsForm = new FormGroup({
      organizationName : this.organizationName,
      description: this.description,
      organizationType: this.organizationType,
      parentOrganizationId: this.parentOrganizationId,
  })
}

  orgInputKeyup() {
    if (this.getOrganizationsSubscription != null) {
      this.getOrganizationsSubscription.unsubscribe();
      this.getOrganizationsSubscription = null;
    }
    this.orgMainService.organizationData.parentOrganizationId = null;
    this.orgMainService.organizationData.parentOrganizationName = null;
    this.getOrganizationsSubscription = this.organizationsService.OrganizationGetManageableOrganizations({
      organizationName: this.parentOrganizationId.value,
      limit: 10
    }).subscribe(
      response => {
        if (response.items.length === 1 && response.items[0].organizationName === this.parentOrganizationId.value) {
          this.selectParentOrganization(response.items[0]);
        }
        else {
          this.organizationList = response.items;
          console.log('this.organizationList', this.organizationList);
          this.showOrgList = true;
        }
        this.getOrganizationsSubscription = null;
      },
      error => {
        this.getOrganizationsSubscription = null;
        console.log(error);
      }
    );
  }



  selectParentOrganization(org: any) {
    this.parentOrganizationId.setValue(org.organizationName);
    this.orgMainService.organizationData.parentOrganizationId = org.id;
    this.orgMainService.organizationData.parentOrganizationName = org.organizationName;
    this.showOrgList = false;
  }

  // organizationListApi(): void {
  //   this.parentOrgData = [];
  //   this.organizationsService.OrganizationGetManageableOrganizations({}).subscribe(
  //     response => {
  //       this.organizationList = response.items;
  //       this.parentOrgData = this.organizationList.map(value => {
  //         return value.organizationName;
  //       });
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  // routeOrganizationContact() {
  //   this.router.navigate(['organizations/organizationContact']);
  // }
  onSubmit() {
    if (this.detailsForm.valid) {
      //this.accountCall();
      this.router.navigate(['organizations/organizationContact']);
      this.orgMainService.orgaccount(this.orgAccountData);
    }
    console.log('form', this.detailsForm.value);
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
  // accountCall() {
  //   this.orgAccountData = this.detailsForm.value;
  //   // {
  //   //   'organizationName': this.organizationName.value,
  //   //   'description': this.description,
  //   //   'organizationType': this.organizationType,
  //   //   'parentOrganizationId': this.parentOrganizationId,
  //   // };
  //   console.log('setData', this.orgAccountData);
  //   console.log(this.detailsForm.value);
  //   if (this.detailsForm.valid) {
  //     this.loggedIn.emit(
  //       new DetailsOrganization(
  //         this.detailsForm.value.organizationName,
  //         this.detailsForm.value.description,
  //         this.detailsForm.value.organizationType,
  //         this.detailsForm.value.searchOrganization
  //       )
  //     );
  //   }
  //   this.router.navigate(['organizations/organizationContact']);
  // }
}

