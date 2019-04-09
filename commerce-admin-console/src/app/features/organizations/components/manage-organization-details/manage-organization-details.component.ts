import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-organization-details',
  templateUrl: './manage-organization-details.component.html',
  styleUrls: ['./manage-organization-details.component.scss']
})
export class ManageOrganizationDetailsComponent implements OnInit {

  constructor() { }
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

}
