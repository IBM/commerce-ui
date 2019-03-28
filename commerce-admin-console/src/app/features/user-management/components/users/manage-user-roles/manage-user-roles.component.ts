import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-roles',
  templateUrl: './manage-user-roles.component.html',
  styleUrls: ['./manage-user-roles.component.scss']
})
export class ManageUserRolesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveRoles() {
    this.router.navigate(['/users/manageGroups']);
  }

}
