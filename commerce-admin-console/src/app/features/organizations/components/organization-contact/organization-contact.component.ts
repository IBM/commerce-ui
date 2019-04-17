import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-organization-contact',
  templateUrl: './organization-contact.component.html',
  styleUrls: ['./organization-contact.component.scss']
})
export class OrganizationContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  routeOrganizationDetails() {
    this.router.navigate(['organizations/organizationsDetails']);
  }
  routeOrganizationRoles() {
    this.router.navigate(['organizations/organizationsRoles']);
  }
}
