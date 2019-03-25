import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  model: '';
  disabled: '';
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
  rolesList = [
    {
      content: 'Developer',
      selected: false
    },
    {
      content: 'Tester',
      selected: false,
    }
  ];
  ngOnInit() {
  }

}
