import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'ac-manage-user-roles',
  templateUrl: './manage-user-roles.component.html',
  styleUrls: ['./manage-user-roles.component.scss']
})
export class ManageUserRolesComponent implements OnInit {
  manageRolesForm: FormGroup;
  organization: FormControl;
  roles: FormControl;
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
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.organization = new FormControl('', Validators.required);
    this.roles = new FormControl('', Validators.required);
  }
  createForm() {
    this.manageRolesForm = new FormGroup({
      organization: this.organization,
      roles: this.roles,
    });
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
