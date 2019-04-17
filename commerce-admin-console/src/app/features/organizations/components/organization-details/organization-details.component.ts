import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {
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
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  routeOrganizationContact() {
    this.router.navigate(['organizations/organizationContact']);
  }
}
