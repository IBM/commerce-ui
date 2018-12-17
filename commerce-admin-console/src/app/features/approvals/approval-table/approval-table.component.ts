import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
  TableItem,
  TableHeaderItem,
  TableModel,
} from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { ApprovalStatusQueryService } from '../approvals-status-query.service';
import { ComIbmCommerceApprovalBeansOrderApprovalStatusListDataBean_IBM_Store_SummaryResultList } from '../../../rest/models'
import { Subscription } from 'rxjs';
import { ApprovalUpdateService } from '../approval-update.service';
import { ApprovalConstants } from '../approval.constants';



@Component({
  selector: 'ac-approval-table',
  templateUrl: './approval-table.component.html',
  styleUrls: ['./approval-table.component.scss']
})
export class ApprovalTableComponent implements OnInit {

  public approvalTableContent: TableModel;

  availableRows ='0';
    viewedRows = '0';

  public isTableEmpty: boolean;

  private readonly headerIndex = {
    '0': {
      'translateId': 'APPROVALS.APPROVAL_TABLE.HEADER_ID',
      'sortOrderAscId': 'A-approvalStatusId',
      'sortOrderDescId': 'D-approvalStatusId'
    },
    '1': {
      'translateId': 'APPROVALS.APPROVAL_TABLE.HEADER_SUBMITTER',
      'sortOrderAscId': '',
      'sortOrderDescId': ''
    },
    '2': {
      'translateId': 'APPROVALS.APPROVAL_TABLE.HEADER_PROCESS',
      'sortOrderAscId': 'A-flowTypeId',
      'sortOrderDescId': 'D-flowTypeId'
    },
    '3': {
      'translateId': 'APPROVALS.APPROVAL_TABLE.HEADER_STATUS',
      'sortOrderAscId': 'A-stateId',
      'sortOrderDescId': 'D-stateId'
    },
    '4': {
      'translateId': 'APPROVALS.APPROVAL_TABLE.HEADER_SUBMITTED_ON',
      'sortOrderAscId': 'A-submitTime',
      'sortOrderDescId': 'D-submitTime'
    }
  }

  private translationSubscription: Subscription;
  private approvalsDataSubscription: Subscription;
  private approvalUpdateSubscription: Subscription;

  @ViewChild('filterableHeaderTemplate')
  private filterableHeaderTemplate: TemplateRef<any>;
  @ViewChild('filter')
  private filter: TemplateRef<any>;
  @ViewChild('customTableItemTemplate')
  private customTableItemTemplate: TemplateRef<any>;

  constructor(
    private translate: TranslateService,
    private approvalStatusQueryService: ApprovalStatusQueryService,
    private approvalUpdateService: ApprovalUpdateService) {
    translate.setDefaultLang('en');
    this.approvalTableContent = new TableModel();
    this.approvalTableContent.data = [[]];
    this.approvalTableContent.pageLength = approvalStatusQueryService.getPageSize();
    // Make sure the table initializes with pending requests
    this.approvalStatusQueryService.setStatus(ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_PENDING);
    this.isTableEmpty = true;
  }

  ngOnInit() {
    this.populateTableHeader();
    this.approvalsDataSubscription = this.approvalStatusQueryService.approvalsData$.subscribe((data: any) => {
      this.parseTableData(data)
    });
    this.approvalUpdateSubscription = this.approvalUpdateService.approvalUpdateEvent$.subscribe((eventType: string) => {
      this.handleApprovalUpdateEvent(eventType);
    });
    this.selectPage(1);
  }

  ngOnDestroy() {
    this.translationSubscription.unsubscribe();
    this.approvalsDataSubscription.unsubscribe();
    this.approvalUpdateSubscription.unsubscribe();
  }

  simpleSort(index: number) {
    this.sort(this.approvalTableContent, index);
  }

  sort(model, index: number) {
    if (model.header[index].sorted) {
      // if already sorted flip sorting direction
      model.header[index].ascending = model.header[index].descending;
      if (this.headerIndex[index].sortOrderDescId !== '') {
        this.approvalStatusQueryService.setOrderBy(this.headerIndex[index].sortOrderDescId);
        this.approvalStatusQueryService.queryApprovalStatuses();
      }
    }
    model.sort(index);
    if (this.headerIndex[index].sortOrderAscId !== '') {
      this.approvalStatusQueryService.setOrderBy(this.headerIndex[index].sortOrderAscId);
      this.approvalStatusQueryService.queryApprovalStatuses();
    }

  }

  selectPage(pageNumber: number) {
    this.approvalStatusQueryService.setPageNumber(pageNumber);
    this.approvalStatusQueryService.queryApprovalStatuses();
  }

  parseTableData(data: any) {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.approvalTableContent.data = [[]];
    this.populateTableHeader();

    this.approvalTableContent.currentPage = data.pageNumber;
    this.isTableEmpty = false;
    this.approvalTableContent.totalDataLength = data.recordSetTotal;
    this.availableRows = data.recordSetTotal;
    this.viewedRows = this.approvalTableContent.data.length.toString();

    if (this.approvalTableContent.totalDataLength === 0) {
      this.isTableEmpty = true;
      this.approvalTableContent.totalDataLength = 1; //For Pagination to render properly...
    }

    data.resultList.forEach((item: ComIbmCommerceApprovalBeansOrderApprovalStatusListDataBean_IBM_Store_SummaryResultList) => {
      this.approvalTableContent.addRow([
        new TableItem({ data: item.approvalStatusId }),
        new TableItem({ data: item.submitterId }),
        new TableItem({ data: item.flowId }),
        new TableItem({ data: item.status }),
        new TableItem({ data: item.submitTime }),
      ]);
    });
  }

  populateTableHeader() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId
    ]).subscribe((result: object) => {
      this.approvalTableContent.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] })
      ];
    });
  }

  handleApprovalUpdateEvent(eventType: string) {
    let selectedItems = [];
    this.approvalTableContent.rowsSelected.forEach((item: boolean, index) => {
      if (item) {
        selectedItems.push(this.approvalTableContent.data[index][0]['data']); 
      }
    });
    if (ApprovalConstants.APPROVE_EVENT === eventType) {
      this.approvalUpdateService.approveSelected(selectedItems);
    } else if (ApprovalConstants.REJECT_EVENT === eventType) {
      this.approvalUpdateService.rejectSelected(selectedItems);
    }
  }
}