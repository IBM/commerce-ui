import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { ApprovalStatusService } from '../../../../rest/services/approval-status.service';
import { UsersService } from '../../../../rest/services/users.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-approvals-list',
  templateUrl: './approvals-list.component.html',
  styleUrls: ['./approvals-list.component.scss']
})
export class ApprovalsListComponent implements OnInit {

  organizationResponse: any;
  approvalList = [];
   userLogonName: any;
   showApprovalList = false;
   userDetails: any;
  
  @Input() striped = false;

  @Input() model = new TableModel();

  @Input() get totalDataLength() {
    return this.model.totalDataLength;
  }
  set totalDataLength(value) {
    this.model.totalDataLength = value;
  }

  @ViewChild('paginationTableItemTemplate')
  protected paginationTableItemTemplate: TemplateRef<any>;
  @ViewChild('listOrgItemTemplate')
  protected listOrgItemTemplate: TemplateRef<any>;

  options = ['option1', 'option2', 'option3'];


  constructor(private approvalService: ApprovalStatusService,
    private usersService: UsersService) { }

  ngOnInit() {
    this.model.header = [
      new TableHeaderItem({ data: 'Requestor' }),
      new TableHeaderItem({ data: 'Approver' }),
      new TableHeaderItem({ data: 'Process' }),
      new TableHeaderItem({ data: 'Status' }),
      new TableHeaderItem({ data: 'Date Submitted' }),
    ];
    this.model.data = [];
    this.model.pageLength = 10;
    this.model.totalDataLength = this.organizationResponse;


    this.selectPage(1);
  }
  getPage(page: number) {

    return new Promise(resolve => {

      this.approvalService.findAllResponse({
        offset: (page - 1) * this.model.pageLength,
        limit: this.model.pageLength,
      }).subscribe((response: any) => {
        this.approvalList = response.body.items;
        //debugger;
        this.model.totalDataLength = response.body.count;
        //console.log("org" + this.totalDataLength);
        const data = [];
        for (let i = 0; i < response.body.items.length; i++) {
          const item = response.body.items[i];
          this.organizationResponse = item;
          this.getLogonID(item.submitterId);
          //this.approvalService.organizationData = item;
          const approver = item.approverId;
          const process = this.conversionGetProcess(item.flowTypeId);
          const status = this.conversionGetStatus(item.status);
          const requestor = this.userDetails;
          const datesubmitted = item.submitDate;
          data.push([requestor, approver, process, status, datesubmitted]);
        }
        resolve(data);
        console.log(data);
        //console.log(data[0]);
      });
    });
  }
  conversionGetProcess(flowTypeId) {
    let processType: string;
    switch (flowTypeId) {
      case "10001": {
        processType = "RFQ response";
        break;
      }
      case "10002": {
        processType = "Order approval";
        break;
      }
      case "10003": {
        processType = "Contract approval";
        break;
      }
      case "10004": {
        processType = "Buyer approval";
        break;
      }
      case "10005": {
        processType = "Seller org approval";
        break;
      }
      case "10006": {
        processType = "Seller approval";
        break;
      }
    }
    return processType;
  }
  conversionGetStatus(status) {
    var ApprovalStatus: string;
    switch (status) {
      case "0": {
        ApprovalStatus = "Pending";
        break;
      }
      case "1": {
        ApprovalStatus = "Approved";
        break;
      }
      case "2": {
        ApprovalStatus = "Rejected";
        break;
      }
    }
    return ApprovalStatus;
  }
  
  getLogonID(id) {
  console.log('id', id);
         this.usersService.UsersFindByUserId(id).subscribe(
             response => {
               debugger
        this.userDetails = response.logonId;
        this.showApprovalList = true;
        console.log('this.userDetails', this.userDetails);
             },
             error => {
                 console.log(error);
             }
         );
  }

  // getLogonID(id: number) {
  //       this.usersService.UsersFindByUserId(id
  //       ).subscribe((response) => {
  //         //for (let i = 0; i < response.length; i++) {
  //           if (id === response.id) {
  //             debugger;
  //             this.userLogonName = response.logonId;
  //           }
  //           return this.userLogonName;
  //         //}
  //         console.log('service', this.userLogonName);
  //       });
  //   }
  selectPage(page) {

    this.getPage(page).then((data: Array<Array<any>>) => {
      // set the data and update page
      this.model.data = this.prepareData(data);
      this.model.currentPage = page;
    });
  }

  prepareData(data: Array<Array<any>>) {
    const listData = [];
    data.forEach((value, idx) => {
      console.log('val', value);
      console.log('idx', idx);
      listData.push([new TableItem({ data: data[idx][0] }),
      new TableItem({ data: data[idx][1] }),
      new TableItem({ data: data[idx][2] }),
      new TableItem({ data: data[idx][3] }),
      new TableItem({ data: data[idx][4] })]);
    });
    return listData;
  }

}
