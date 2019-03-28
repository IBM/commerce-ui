import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {
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
  goToRoles() {
    this.router.navigate(['users/userRoles']);
    }
    backClick() {
      this.router.navigate(['users/userAccount']);
    }
  cancelClick() {
    this.router.navigate(['users']);
  }
}
