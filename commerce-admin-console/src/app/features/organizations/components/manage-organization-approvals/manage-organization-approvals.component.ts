import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
export class ManageApprovals {
  constructor(public manageAvailableApprovals: string,
  ) {
  }
}
@Component({
  selector: 'app-manage-organization-approvals',
  templateUrl: './manage-organization-approvals.component.html',
  styleUrls: ['./manage-organization-approvals.component.scss']
})
export class ManageOrganizationApprovalsComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<ManageApprovals>();
  manageApprovalsForm: FormGroup;
  approvalListData: any;

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
  constructor(private router: Router , private _fb: FormBuilder) { }

  ngOnInit() {
    this.approvalListData = this.approvalList;
    this.manageApprovalsForm = this._fb.group({
      manageAvailableApprovals: ['', [
        Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.manageApprovalsForm.value);
    if (this.manageApprovalsForm.valid) {
      this.loggedIn.emit(
        new ManageApprovals(
          this.manageApprovalsForm.value.manageAvailableApprovals,
        )
      );
    }
    this.router.navigate(['organizations']);
  }
  routeManageOrganizationRoles() {
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
