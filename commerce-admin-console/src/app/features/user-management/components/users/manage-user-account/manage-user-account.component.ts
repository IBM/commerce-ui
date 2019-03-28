import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-account',
  templateUrl: './manage-user-account.component.html',
  styleUrls: ['./manage-user-account.component.scss']
})
export class ManageUserAccountComponent implements OnInit {
  showInput: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveAccount() {
    this.router.navigate(['/users/manageContact']);
  }
}
