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
  orgList: any;
  rolesList: any;
  constructor() { }

  ngOnInit() {
  }
  saveRoles() {}
}
