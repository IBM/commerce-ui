import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.scss']
})
export class OrganizationDetailsComponent implements OnInit {
  disabled: boolean;
  model: string;
  userForm = new FormGroup({
    organizationName: new FormControl(),
    description: new FormControl(),
    organizationType: new FormControl(),
    searchOrganization: new FormControl()
  });
  constructor(private router: Router, private fb: FormBuilder) { }
  orgList = [
    {
      content: 'Organization',
      selected: false
    },
    {
      content: 'Organization Unit',
      selected: false,
    }
  ];
  ngOnInit() {
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  // routeOrganizationContact() {
  //   this.router.navigate(['organizations/organizationContact']);
  // }
  onSubmit() {
    console.log(this.userForm.value);
    this.router.navigate(['organizations/organizationContact']);
  }
}
