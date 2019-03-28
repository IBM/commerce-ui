import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {
  groupListData: any;

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

  submitUserDetails() {
    this.router.navigate(['users']);
    }
    backClick() {
      this.router.navigate(['users/userRoles']);
    }
<<<<<<< Updated upstream
    cancelClick() {
=======
  cancelClick() {
>>>>>>> Stashed changes
    this.router.navigate(['users']);
  }
}
