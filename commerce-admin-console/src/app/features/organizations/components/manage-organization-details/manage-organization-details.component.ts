import { Component, OnInit, EventEmitter, Output, forwardRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationsService } from '../../../../../../src/app/rest/services/organizations.service';
import { OrganizationMainService } from '../../organization.main.service';
import { IframeService } from '../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

import { FormGroup, Validators, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
export class ManageDetailsOrganization {
  constructor(
    public organizationName: string,
    public description: string,
    public organizationType: string,
    public searchOrganization: string
    ) {
  }
}
@Component({
  selector: 'app-manage-organization-details',
  templateUrl: './manage-organization-details.component.html',
  styleUrls: ['./manage-organization-details.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ManageOrganizationDetailsComponent),
    }
  ]
})
export class ManageOrganizationDetailsComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<ManageDetailsOrganization>();
  manageDetailsForm: FormGroup;

  disabled: boolean;
  model: string;
  orgDetailsData: any;
  manageOrgResponse: any;
  id: number;
  organizationName: any;
  description: any;
  parentOrganization: any;
  private sub: any;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private OrgService: OrganizationsService,
    private orgMainService: OrganizationMainService,
    private iframeService: IframeService,
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) { }

  orgList = [
    {
      content: 'Organization A',
      selected: false
    },
    {
      content: 'Organization B',
      selected: false,
    }
  ];

  ngOnInit() {
    this.getOrgApiCall();
    this.manageDetailsForm = this._fb.group({
      organizationName: [],
        description: [],
        organizationType: [],
        searchOrganization: []
    });
  }

  getOrgApiCall() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });
    // this.id = -2001;
    this.orgMainService.getUpdateOrg(this.id).then(results => {
    this.manageOrgResponse = Object.assign([], results);
    this.setModelData();
    // console.log("getOrgApiCall FROM SERVICE", this.id, this.manageOrgResponse);
    }).catch(() => {
      this.translateService
          .get('CATALOGS.HEADR.store_list_failed')
          .subscribe((msg: string) => {
            this.iframeService.postStatusMsg(msg, 'error');
          });
    });
  }

  updateOrgApiCall() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("CHECKING ROUTE PARAMS", this.id);
   });
    // this.id = -2001;
    this.orgMainService.updateOrg(this.id).then(results => {
      console.log("this.orgMainService.updateOrg(this.id)", this.id);
      this.manageOrgResponse = Object.assign([], results);
      this.setModelData();
      console.log("updateOrgApiCall FROM SERVICE", this.id, this.manageOrgResponse);
    }).catch(() => {
      this.translateService
      .get('CATALOGS.HEADR.store_list_failed')
      .subscribe((msg: string) => {
        this.iframeService.postStatusMsg(msg, 'error');
      })
    })
  }

  setModelData() {
    this.organizationName = this.manageOrgResponse.organizationName;
    this.description = this.manageOrgResponse.description;
    this.parentOrganization = this.manageOrgResponse.parentOrganizationName;
  }
 
  detailsCall() {
    this.orgDetailsData = {
      'organizationName': this.organizationName,
      'description': this.description,
      'parentOrganization': this.parentOrganization
    };
  }

  onSubmit() {
    console.log(this.manageDetailsForm.value);
    if (this.manageDetailsForm.valid) {
      this.loggedIn.emit(
        new ManageDetailsOrganization(
          this.manageDetailsForm.value.organizationName,
          this.manageDetailsForm.value.description,
          this.manageDetailsForm.value.organizationType,
          this.manageDetailsForm.value.searchOrganization
        )
      );
    }
    this.detailsCall();
    this.orgMainService.manageOrgData(this.orgDetailsData);
    this.updateOrgApiCall();
    this.router.navigate(['organizations/manageOrganizationContact', this.id]);
  }
  // routeOrganizationApprovals() {
  //   this.router.navigate(['organizations/organizationsApprovals']);
  // }
  // routeManageOrganizationContact() {
  //   this.router.navigate(['organizations/manageOrganizationContact']);
  // }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
