import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationMainService } from '../../organization.main.service';
import { TranslateService } from '@ngx-translate/core';
import { IframeService } from '../../../../services/iframe.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
export class Approvals {
  constructor(public availableApprovals: string,
  ) {
  }
}
@Component({
  selector: 'app-organization-approvals',
  templateUrl: './organization-approvals.component.html',
  styleUrls: ['./organization-approvals.component.scss']
})
export class OrganizationApprovalsComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<Approvals>();
  // approvalsForm: FormGroup;
  approvalListData: any;
  createUserResponse: any;

  approvalList = [
    { id: 1, approvalName: 'Order Process approvals' },
    { id: 2, approvalName: 'User registration approvals' },
    { id: 3, approvalName: 'Approvals' },
    { id: 4, approvalName: 'Approvals' },
    { id: 5, approvalName: 'Approvals' },
    { id: 6, approvalName: 'Approvals' },
    { id: 7, approvalName: 'Approvals' },
    { id: 8, approvalName: 'Approvals' },
    { id: 9, approvalName: 'Approvals' },
    { id: 10, approvalName: 'Approvals' }
  ];
  constructor(
    // private _fb: FormBuilder,
     private router: Router, private orgMainService: OrganizationMainService,
    private translateService: TranslateService, private iframeService: IframeService) { }
  ngOnInit() {
    this.approvalListData = this.approvalList;
  }

  RoutonOrganizations() {
    this.createUserApiCall();
    this.router.navigate(['organizations']);
  }
  routeOrganizationRoles() {
    this.router.navigate(['organizations/organizationsRoles']);
  }
  // routeManageOrganizationDetails() {
  //   this.router.navigate(['organizations/manageOrganizationDetails']);
  // }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  createUserApiCall() {
    this.orgMainService.createUser().then(results => {
    this.createUserResponse = Object.assign([], results);
    console.log('from component', this.createUserResponse);
 }).catch(() => {
  this.translateService
      .get('CATALOGS.HEADR.store_list_failed')
      .subscribe((msg: string) => {
        this.iframeService.postStatusMsg(msg, 'error');
      });
});
}

  submitUserDetails() {
    this.createUserApiCall();
    this.router.navigate(['organizations']);
    }
}
