import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationMainService } from '../../organization.main.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
export class Roles {
  constructor(public availableRoles: string,
  ) {
  }
}
@Component({
  selector: 'app-organization-roles',
  templateUrl: './organization-roles.component.html',
  styleUrls: ['./organization-roles.component.scss']
})
export class OrganizationRolesComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<Roles>();
  rolesForm: FormGroup;
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
  constructor(private router: Router, private orgMainService: OrganizationMainService,
    private _fb: FormBuilder) { }


  ngOnInit() {
    this.roleListData = this.roleList;

    this.rolesForm = this._fb.group({
      availableRoles: ['', [
        Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.rolesForm.value);
    if (this.rolesForm.valid) {
      this.loggedIn.emit(
        new Roles(
          this.rolesForm.value.availableRoles,
        )
      );
    }
    this.router.navigate(['organizations/organizationsApprovals']);
  }

  routeOrganizationContact() {
    this.orgMainService.rolesBackCall = true;
    this.router.navigate(['users/userContact']);
    this.router.navigate(['organizations/organizationContact']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
