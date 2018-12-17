import { Component, OnInit } from '@angular/core';
import { Modal } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { ApprovalStatusQueryService } from '../approvals-status-query.service';

@Modal()
@Component({
  selector: 'ac-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  closeModal: Function;
  submitterFirstName: string;
  submitterLastName: string;
  submitterMiddleName: string;
  startSubmitTime: string;
  endSubmitTime: string;
  approvalStatusId: number;
  entityId: number;
  approverId: number;


  constructor(private translate: TranslateService, 
    private approvalStatusQueryService: ApprovalStatusQueryService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  find() {
    this.approvalStatusQueryService.setSubmitterFirstName(this.submitterFirstName);
    this.approvalStatusQueryService.setSubmitterLastName(this.submitterLastName);
    this.approvalStatusQueryService.setSubmitterMiddleName(this.submitterMiddleName);
    this.approvalStatusQueryService.setStartSubmitTime(this.startSubmitTime);
    this.approvalStatusQueryService.setEndSubmitTime(this.endSubmitTime);
    this.approvalStatusQueryService.setApprovalStatusId(this.approvalStatusId);
    this.approvalStatusQueryService.setEntityId(this.entityId);
    this.approvalStatusQueryService.setApproverId(this.approverId);
    this.approvalStatusQueryService.queryApprovalStatuses();
    this.closeModal();
  }

}
