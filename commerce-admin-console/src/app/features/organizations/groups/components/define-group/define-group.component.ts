import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-define-group',
  templateUrl: './define-group.component.html',
  styleUrls: ['./define-group.component.scss']
})
export class DefineGroupComponent implements OnInit {

  constructor(private router: Router) { }
  orgList = [
    {
      content: 'Organization',
      selected: false
    },
    {
      content: 'Organization Unit',
      selected: false,
    }
  ];
  ngOnInit() {
  }
  routeGroupList() {
    this.router.navigate(['organizations/groupList']);
   }
   routeGroupDetails() {
    this.router.navigate(['organizations/groupDetails']);
   }
}
