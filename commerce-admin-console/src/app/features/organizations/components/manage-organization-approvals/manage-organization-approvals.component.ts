import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-organization-approvals',
  templateUrl: './manage-organization-approvals.component.html',
  styleUrls: ['./manage-organization-approvals.component.scss']
})
export class ManageOrganizationApprovalsComponent implements OnInit {

  
  approvalListData: any;

  approvalList = [
    { id: 1, approvalName: 'Order Process approvals' },
    { id: 2, approvalName: 'User registration approvals' },
    { id: 3, approvalName: 'Approvals' },
    { id: 4, approvalName: 'Approvals' },
    { id: 5, approvalName: 'Approvals' },
    { id: 6, approvalName: 'Approvals' },
    { id: 7, approvalName: 'Approvals' },
    { id: 8, approvalName: 'Approvals' },
    { id: 9, approvalName: 'Approvals' },
    { id: 10, approvalName: 'Approvals' }
  ];
  constructor() { }

  ngOnInit() {
    this.approvalListData = this.approvalList;
  }

}
