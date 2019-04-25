import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationMainService } from '../../organization.main.service';
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
  constructor(private router: Router, private orgMainService: OrganizationMainService) { }

  ngOnInit() {
    this.roleListData = this.roleList;
  }
  routeOrganizationContact() {
    this.orgMainService.rolesBackCall = true;
    this.router.navigate(['users/userContact']);
    this.router.navigate(['organizations/organizationContact']);
  }
  routeOrganizationApprovals() {
    this.router.navigate(['organizations/organizationsApprovals']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
