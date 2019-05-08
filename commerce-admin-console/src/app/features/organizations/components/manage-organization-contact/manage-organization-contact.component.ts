import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationsService } from '../../../../../../src/app/rest/services/organizations.service';
import { OrganizationMainService } from '../../organization.main.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { IframeService } from '../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

export class ManageUserContact {
  constructor(public contactName: string,
    public contactEmail: string,
    public streetAddress: string,
    public apartmentName: string,
    public city: string,
    public state: string) {
  }
}
@Component({
  selector: 'app-manage-organization-contact',
  templateUrl: './manage-organization-contact.component.html',
  styleUrls: ['./manage-organization-contact.component.scss']
})
export class ManageOrganizationContactComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<ManageUserContact>();
  manageContactForm: FormGroup;

  orgContactData: any;
  manageOrgResponse: any;
  id: number;
  contactName: any;
  contactEmail: any;
  streetAddress1: any;
  streetAddress2: any;
  city: any;
  state: any;
  country: any;
  zipcode: any;
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

  ngOnInit() {
    this.getOrgApiCall();
    this.manageContactForm = this._fb.group({
      contactName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]],
      contactEmail: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]],
      streetAddress: [],
      apartmentName: [],
      city: [],
      state: []
    });
  }

  getOrgApiCall() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("CHECKING ROUTE PARAMS", this.id);
    });
    // this.id = -2011;
    this.orgMainService.getUpdateOrg(this.id).then(results => {
      this.manageOrgResponse = Object.assign([], results);
      this.setModelData();
      console.log("GET UPDATEUSER DATA FROM SERVICE", this.manageOrgResponse);
    }).catch(() => {
      this.translateService
        .get('CATALOGS.HEADR.store_list_failed')
        .subscribe((msg: string) => {
          this.iframeService.postStatusMsg(msg, 'error');
        });
    });
  }

  updateOrgApiCall() {
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
    this.contactName = this.manageOrgResponse.organizationName;
    this.contactEmail = this.manageOrgResponse.address.email1;
    this.streetAddress1 = this.manageOrgResponse.address.address1;
    this.streetAddress2 = this.manageOrgResponse.address.address2;
    this.city = this.manageOrgResponse.address.city;
    this.state = this.manageOrgResponse.address.state;
    this.country = this.manageOrgResponse.address.country;
    this.zipcode = this.manageOrgResponse.address.zipCode;
  }

  contactCall() {
    this.orgContactData = {
      'contactName': this.contactName,
      'contactEmail': this.contactEmail,
      'streetAddress1': this.streetAddress1,
      'streetAddress2': this.streetAddress2,
      'city': this.city,
      'state': this.state,
      'country': this.country,
      'zipcode': this.zipcode
    };
  }

  onSubmit() {
    console.log(this.manageContactForm.value);
    if (this.manageContactForm.valid) {
      this.loggedIn.emit(
        new ManageUserContact(
          this.manageContactForm.value.contactName,
          this.manageContactForm.value.contactEmail,
          this.manageContactForm.value.streetAddress,
          this.manageContactForm.value.apartmentName,
          this.manageContactForm.value.city,
          this.manageContactForm.value.state,
        )
      );
    }
    this.contactCall();
    this.orgMainService.manageOrgData(this.orgContactData);
    this.updateOrgApiCall();
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }

  routeManageOrganizationDetails() {
    this.router.navigate(['organizations/manageOrganizationDetails']);
  }
  routeManageOrganizationRoles() {
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
