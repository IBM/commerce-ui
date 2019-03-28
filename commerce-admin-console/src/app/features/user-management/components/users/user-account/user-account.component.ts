import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  showInput: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.showInput = true;
  }
  goToContact() {
  this.router.navigate(['users/userContact']);
  }
  cancelClick() {
    this.router.navigate(['users']);
  }
}
