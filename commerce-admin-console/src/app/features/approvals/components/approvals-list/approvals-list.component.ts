import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-approvals-list',
  templateUrl: './approvals-list.component.html',
  styleUrls: ['./approvals-list.component.scss']
})
export class ApprovalsListComponent implements OnInit {

  organizationResponse: any;
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

  options  = ['option1', 'option2', 'option3'];


  constructor() { }

  ngOnInit() {



    this.model.header = [
      new TableHeaderItem({ data: 'Requestor' }),
      new TableHeaderItem({ data: 'Approver' }),
      new TableHeaderItem({ data: 'Process' }),
      new TableHeaderItem({ data: 'Status' }),
      new TableHeaderItem({ data: 'Date Submitted' }),
      new TableHeaderItem({ data: ''})
    ];
    this.model.data = [[]];
    this.model.pageLength = 10;
    this.model.totalDataLength = this.organizationResponse;


    //this.selectPage(1);
  }

}
