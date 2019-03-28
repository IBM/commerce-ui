import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-contact',
  templateUrl: './manage-user-contact.component.html',
  styleUrls: ['./manage-user-contact.component.scss']
})
export class ManageUserContactComponent implements OnInit {

  model: '';
  disabled: '';
  items = [
    {
      content: 'Mr.',
      selected: false
    },
    {
      content: 'Mrs.',
      selected: false,
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveContact() {
    this.router.navigate(['/users/manageRoles']);
  }

}
