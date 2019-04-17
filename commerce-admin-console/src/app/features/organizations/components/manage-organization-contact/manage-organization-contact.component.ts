import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manage-organization-contact',
  templateUrl: './manage-organization-contact.component.html',
  styleUrls: ['./manage-organization-contact.component.scss']
})
export class ManageOrganizationContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  routeManageOrganizationDetails() {
    this.router.navigate(['organizations/manageOrganizationDetails']);
  }
  routeManageOrganizationRoles() {
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }
}
