import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  groupDetailsForm: FormGroup;
  type: FormControl;
  Name: FormControl;
  Description: FormControl;
  parentOrganization: FormControl;
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
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.type = new FormControl('', Validators.required);
    this.Name = new FormControl('', Validators.required);
    this.Description = new FormControl('', Validators.required);
    this.parentOrganization = new FormControl('', Validators.required);
  }
  createForm() {
    this.groupDetailsForm = new FormGroup({
      type: this.type,
      Name: this.Name,
      Description: this.Description,
      parentOrganization: this.parentOrganization
    });
  }
  routeGroupList() {
    this.router.navigate(['member-groups']);
   }
   routeGroupDefine() {
    this.router.navigate(['member-groups/defineGroup']);
   }
}
