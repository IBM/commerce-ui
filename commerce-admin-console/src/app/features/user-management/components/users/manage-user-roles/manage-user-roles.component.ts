import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-roles',
  templateUrl: './manage-user-roles.component.html',
  styleUrls: ['./manage-user-roles.component.scss']
})
export class ManageUserRolesComponent implements OnInit {

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
  rolesList = [
    {
      content: 'Developer',
      selected: true
    },
    {
      content: 'Tester',
      selected: false,
    },
    {
      content: 'Architect',
      selected: false,
    },
    {
      content: 'Test Lead',
      selected: false,
    }
  ];

  ngOnInit() {
  }

  saveRoles() {
    this.router.navigate(['/users/manageGroups']);
  }

}
