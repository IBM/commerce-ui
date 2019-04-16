import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user-groups',
  templateUrl: './manage-user-groups.component.html',
  styleUrls: ['./manage-user-groups.component.scss']
})
export class ManageUserGroupsComponent implements OnInit {
  
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
  constructor() { }

  ngOnInit() {
    this.groupListData = this.groupList;
    console.log(this.groupListData);
  }

  cancelClick() {
    this.router.navigate(['/users']);
  }

  saveGroups() {
    this.router.navigate(['/users/organizationsList']);
  }
}
