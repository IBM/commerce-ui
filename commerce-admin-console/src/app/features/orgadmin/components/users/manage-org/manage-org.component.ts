import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-manage-org',
  templateUrl: './manage-org.component.html',
  styleUrls: ['./manage-org.component.scss']
})
export class ManageOrgComponent implements OnInit {
  showInput: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
