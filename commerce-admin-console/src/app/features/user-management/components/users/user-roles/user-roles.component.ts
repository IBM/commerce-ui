import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  model: '';
  disabled: '';
<<<<<<< Updated upstream
  rolesArray: any = [];
  result: any = [];
  modelRoles: '';
  constructor(private router: Router) { }
=======
  constructor( private router: Router) { }
>>>>>>> Stashed changes

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
  mySelectedRoles(mySelectedRoles: any) {
    if (mySelectedRoles != null) {
      this.rolesArray.push(mySelectedRoles);
      this.removeDuplicate(this.rolesArray);
    }
  }
  removeDuplicate(rolesArray: any) {
    let index;
    const len = rolesArray.length;
    const resultArray = [];
    const obj = {};
    for (index = 0; index < len; index++) {
      obj[rolesArray[index]] = 0;
    }
    for (index in obj) {
      resultArray.push(index);
    }
    this.result = resultArray;
  }

  RemoveRoles(removeRoles: any) {
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i] === removeRoles) {
        this.result.splice(i, 1);
        this.rolesArray.splice(i, 1);
        this.modelRoles = null;
        if (this.result.length === 0) {
          this.result = [];
          this.rolesArray = [];
        }
      }
    }

<<<<<<< Updated upstream
  }
  goToGroup() {
    this.router.navigate(['users/userGroups']);
  }
  backClick() {
    this.router.navigate(['users/userContact']);
  }
=======
  goToGroup() {
    this.router.navigate(['users/userGroups']);
    }
    backClick() {
      this.router.navigate(['users/userContact']);
    }
>>>>>>> Stashed changes
  cancelClick() {
    this.router.navigate(['users']);
  }
}
