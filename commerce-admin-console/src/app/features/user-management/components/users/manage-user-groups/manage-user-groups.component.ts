import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-groups',
  templateUrl: './manage-user-groups.component.html',
  styleUrls: ['./manage-user-groups.component.scss']
})
export class ManageUserGroupsComponent implements OnInit {
  
  groupListData: any;
  id: number;

  groupList = [
    { id: 1, groupName: 'AccountAdministatorsRole1' },
    { id: 2, groupName: 'AccountAdministatorsRole2' },
    { id: 3, groupName: 'AccountAdministatorsRole3' },
    { id: 4, groupName: 'AccountAdministatorsRole4' },
    { id: 5, groupName: 'AccountAdministatorsRole5' },
    { id: 6, groupName: 'AccountAdministatorsRole6' },
    { id: 7, groupName: 'AccountAdministatorsRole7' },
    { id: 8, groupName: 'AccountAdministatorsRole8' },
    { id: 9, groupName: 'AccountAdministatorsRole9' },
    { id: 10, groupName: 'AccountAdministatorsRole10' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.groupListData = this.groupList;
    console.log(this.groupListData);
  }

  cancelClick() {
    this.router.navigate(['/users']);
  }

  saveGroups() {
    this.router.navigate(['/users']);
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
  goToRoles() {
    // this.accountCall();
    // this.userMainService.manageUserData(this.userAccountData);
    // this.updateUserApiCall();
    this.router.navigate(['/users/manageRoles', this.id]);
  }
}
