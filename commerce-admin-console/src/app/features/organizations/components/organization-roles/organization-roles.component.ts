import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-organization-roles',
  templateUrl: './organization-roles.component.html',
  styleUrls: ['./organization-roles.component.scss']
})
export class OrganizationRolesComponent implements OnInit {
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
  constructor(private router: Router) { }

  ngOnInit() {
    this.roleListData = this.roleList;
  }
  routeOrganizationContact() {
    this.router.navigate(['organizations/organizationContact']);
  }
  routeOrganizationApprovals() {
    this.router.navigate(['organizations/organizationsApprovals']);
  }

}
