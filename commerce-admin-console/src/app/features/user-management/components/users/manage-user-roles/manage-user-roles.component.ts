import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-manage-user-roles',
  templateUrl: './manage-user-roles.component.html',
  styleUrls: ['./manage-user-roles.component.scss']
})
export class ManageUserRolesComponent implements OnInit {
  model: '';
  disabled: '';
  rolesArray: any = [];
  result: any = [];
  modelRoles: '';
  id: number;

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

  cancelClick() {
    this.router.navigate(['/users']);
  }
  saveRoles() {
    this.router.navigate(['/users/manageGroups']);
  }

  goToAccount() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageAccount', this.id]);
  }

  goToContact() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageContact', this.id]);
  }
  goToGroups() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageGroups', this.id]);
  }
}
