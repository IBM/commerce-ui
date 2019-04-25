import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
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
  styleUrls: ['./manage-organization-details.component.scss']
})
export class ManageOrganizationDetailsComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<ManageDetailsOrganization>();
  manageDetailsForm: FormGroup;

  disabled: boolean;
  model: string;
  constructor(private router: Router, private _fb: FormBuilder) { }
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
    this.manageDetailsForm = this._fb.group({
      organizationName: ['', [
        Validators.required]],
        description: [],
        organizationType: [],
        searchOrganization: []
    });
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
    this.router.navigate(['organizations/manageOrganizationContact']);
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
