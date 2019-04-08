import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { UserSettingService } from '../../../services/user-setting.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  disabled: '';
  rolesData: any;
  userRolesData: any;
  rolesArray: any = [];
  result: any = [];
  modelRoles: '';
  organization: string;
  availablrRoles: string;

  constructor(private router: Router, private userMainService: UserMainService,
    private userSettingService: UserSettingService) { }

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
    this.rolesData = this.userMainService.listData;
  }

  }
  goToGroup() {
    this.rolesCall();
    this.userMainService.userRoles(this.userRolesData);
    this.router.navigate(['users/userGroups']);
  }
  backClick() {
    this.userSettingService.rolesBackCall = true;
    this.router.navigate(['users/userContact']);
  }
  cancelClick() {
    this.router.navigate(['users']);
  }

  rolesCall() {
    this.userRolesData = {
      availablrRoles: this.availablrRoles
    };
  }
}
