import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

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
   routeGroupDefine() {
    this.router.navigate(['organizations/groupDefine']);
   }
}
