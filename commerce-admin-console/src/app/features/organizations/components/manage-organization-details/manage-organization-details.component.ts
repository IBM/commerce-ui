import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manage-organization-details',
  templateUrl: './manage-organization-details.component.html',
  styleUrls: ['./manage-organization-details.component.scss']
})
export class ManageOrganizationDetailsComponent implements OnInit {
  disabled: boolean;
  model: string;
  constructor(private router: Router) { }
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
  }
  routeOrganizationApprovals() {
    this.router.navigate(['organizations/organizationsApprovals']);
  }
  routeManageOrganizationContact() {
    this.router.navigate(['organizations/manageOrganizationContact']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
