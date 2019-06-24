import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-define-group',
  templateUrl: './define-group.component.html',
  styleUrls: ['./define-group.component.scss']
})
export class DefineGroupComponent implements OnInit {
  groupDefineForm: FormGroup;
  account: FormControl;
  findAccount: FormControl;
  accountSize: FormControl;
  mediumLargeAccount: FormControl;
  accountGeographical: FormControl;
  findGeographical: FormControl;
  accountLocation: FormControl;
  accountIndustry: FormControl;
  consumerProduct: FormControl;
  accountBusiness: FormControl;
  accountDistributor: FormControl;
  accountSales: FormControl;
  amount: FormControl;
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
    this.account = new FormControl('', Validators.required);
    this.findAccount = new FormControl('', Validators.required);
    this.accountSize = new FormControl('', Validators.required);
    this.mediumLargeAccount = new FormControl('', Validators.required);
    this.accountGeographical = new FormControl('', Validators.required);
    this.findGeographical = new FormControl('', Validators.required);
    this.accountLocation = new FormControl('', Validators.required);
    this.accountIndustry = new FormControl('', Validators.required);
    this.consumerProduct = new FormControl('', Validators.required);
    this.accountBusiness = new FormControl('', Validators.required);
    this.accountDistributor = new FormControl('', Validators.required);
    this.accountSales = new FormControl('', Validators.required);
    this.amount = new FormControl('', Validators.required);
  }
  createForm() {
    this.groupDefineForm = new FormGroup({
      account: this.account,
      findAccount: this.findAccount,
      accountSize: this.accountSize,
      mediumLargeAccount: this.mediumLargeAccount,
      accountGeographical: this.accountGeographical,
      findGeographical: this.findGeographical,
      accountLocation: this.accountLocation,
      accountIndustry: this.accountIndustry,
      consumerProduct: this.consumerProduct,
      accountBusiness: this.accountBusiness,
      accountDistributor: this.accountDistributor,
      accountSales: this.accountSales,
      amount: this.amount,
    });
  }
  routeGroupList() {
    this.router.navigate(['member-groups']);
   }
   routeGroupDetails() {
    this.router.navigate(['member-groups/groupDetails']);
   }
}
