import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationsService } from '../../../../rest/services/organizations.service';
import { OrganizationMainService } from '../../organization.main.service';
import { Subscription } from 'rxjs';
import { UserMainService } from '../../../user-management/services/user-main.service';

export class DetailsOrganization {
  constructor(
    public organizationName: string,
    public description: string,
    public organizationType: string,
    public searchOrganization: string
  ) {
  }
}

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})


export class OrganizationDetailsComponent implements OnInit {
  // userForm: FormGroup;
  disabled: boolean;
  model: string;
  organizationName: any;
  description: any;
  organizationType: any;
  parentOrganizationId: any;
  accountData: any;
  orgAccountData: any;
  showOrgList: boolean;
  parentOrgData: Array<string>;
  organizationList: any;
  getOrganizationsSubscription: Subscription = null;


  @Output() loggedIn = new EventEmitter<DetailsOrganization>();
  detailsForm: FormGroup;

  // userForm = new FormGroup({
  //   organizationName: new FormControl(),
  //   description: new FormControl(),
  //   organizationType: new FormControl(),
  //   searchOrganization: new FormControl()
  // });
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


  constructor(private router: Router, private fb: FormBuilder,
    private orgMainService: OrganizationMainService,
    private organizationsService: OrganizationsService,
    private userMainService: UserMainService) { }


  ngOnInit() {
    this.organizationListApi();
    this.accountData = this.orgMainService.orgAccountData;
    //   if (this.orgMainService.contactBackClick) {
    //     this.setModelData();
    // }

    this.detailsForm = this.fb.group({
      organizationName: ['', [
        Validators.required]],
      description: [],
      organizationType: [],
      searchOrganization: []
    });
  }


  orgInputKeyup() {
    if (this.getOrganizationsSubscription != null) {
      this.getOrganizationsSubscription.unsubscribe();
      this.getOrganizationsSubscription = null;
    }
    this.userMainService.userData.parentOrganizationId = null;
    this.userMainService.userData.parentOrganizationName = null;
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
    this.userMainService.userData.parentOrganizationId = org.id;
    this.userMainService.userData.parentOrganizationName = org.organizationName;
    this.showOrgList = false;
  }

  organizationListApi(): void {
    this.parentOrgData = [];
    this.organizationsService.OrganizationGetManageableOrganizations({}).subscribe(
      response => {
        this.organizationList = response.items;
        this.parentOrgData = this.organizationList.map(value => {
          return value.organizationName;
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  // routeOrganizationContact() {
  //   this.router.navigate(['organizations/organizationContact']);
  // }
  onSubmit() {
    if (this.detailsForm.valid) {
      this.accountCall();
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
  accountCall() {
    this.orgAccountData = this.detailsForm.value;
    // {
    //   'organizationName': this.organizationName.value,
    //   'description': this.description,
    //   'organizationType': this.organizationType,
    //   'parentOrganizationId': this.parentOrganizationId,
    // };
    console.log('setData', this.orgAccountData);
    console.log(this.detailsForm.value);
    if (this.detailsForm.valid) {
      this.loggedIn.emit(
        new DetailsOrganization(
          this.detailsForm.value.organizationName,
          this.detailsForm.value.description,
          this.detailsForm.value.organizationType,
          this.detailsForm.value.searchOrganization
        )
      );
    }
    this.router.navigate(['organizations/organizationContact']);
  }
}

