import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  showInput: boolean;
  constructor() { }

  ngOnInit() {
    this.showInput = true;
  }
}
