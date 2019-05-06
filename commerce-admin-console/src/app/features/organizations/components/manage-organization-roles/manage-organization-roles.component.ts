import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
export class ManageRoles {
  constructor(public manageAvailableRoles: string,
  ) {
  }
}
@Component({
  selector: 'app-manage-organization-roles',
  templateUrl: './manage-organization-roles.component.html',
  styleUrls: ['./manage-organization-roles.component.scss']
})
export class ManageOrganizationRolesComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<ManageRoles>();
  manageRolesForm: FormGroup;
  roleListData: any;

  roleList = [
    { id: 1, roleName: 'Buyer (buy-side)' },
    { id: 2, roleName: 'Buyer Administrator' },
    { id: 3, roleName: 'Buyer Approver' },
    { id: 4, roleName: 'Role' },
    { id: 5, roleName: 'Role' },
    { id: 6, roleName: 'Role' },
    { id: 7, roleName: 'Role' },
    { id: 8, roleName: 'Role' },
    { id: 9, roleName: 'Role' },
    { id: 10, roleName: 'Role' }
  ];
  constructor(private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.roleListData = this.roleList;
    this.manageRolesForm = this._fb.group({
      manageAvailableRoles: ['', [
        Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.manageRolesForm.value);
    if (this.manageRolesForm.valid) {
      this.loggedIn.emit(
        new ManageRoles(
          this.manageRolesForm.value.manageAvailableRoles,
        )
      );
    }
    this.router.navigate(['organizations/manageOrganizationApprovals']);
  }
  routeManageOrganizationContact() {
    this.router.navigate(['organizations/manageOrganizationContact']);
  }
  // routeManageOrganizationApprovals() {
  //   this.router.navigate(['organizations/manageOrganizationApprovals']);
  // }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
