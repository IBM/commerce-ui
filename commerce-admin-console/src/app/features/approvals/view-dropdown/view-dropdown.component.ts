import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApprovalConstants } from '../approval.constants';
import { ApprovalStatusQueryService } from '../approvals-status-query.service';

@Component({
  selector: 'ac-view-dropdown',
  templateUrl: './view-dropdown.component.html',
  styleUrls: ['./view-dropdown.component.scss']
})
export class ViewDropdownComponent implements OnInit {

  public views = [];

  constructor(private translate: TranslateService,
    private approvalStatusQueryService: ApprovalStatusQueryService
  ) {
    translate.setDefaultLang('en');

  }

  ngOnInit() {
    this.translate.get(['APPROVALS.VIEW_DROPDOWN.VIEW_ALL', 'APPROVALS.VIEW_DROPDOWN.VIEW_PENDING', 'APPROVALS.VIEW_DROPDOWN.VIEW_APPROVED', 'APPROVALS.VIEW_DROPDOWN.VIEW_REJECTED']).subscribe((result: object) => {
      this.views = this.views.concat(
        [
          {
            id: ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_ALL,
            content: result['APPROVALS.VIEW_DROPDOWN.VIEW_ALL'],
            selected: false
          },
          {
            id: ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_PENDING,
            content: result['APPROVALS.VIEW_DROPDOWN.VIEW_PENDING'],
            selected: true
          },
          {
            id: ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_APPROVED,
            content: result['APPROVALS.VIEW_DROPDOWN.VIEW_APPROVED'],
            selected: false
          },
          {
            id: ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_REJECTED,
            content: result['APPROVALS.VIEW_DROPDOWN.VIEW_REJECTED'],
            selected: false
          }
        ]);
    })
  }

  select(view) {
    if (view.item.selected) {
      switch (view.item.id) {
        case ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_PENDING:
          this.approvalStatusQueryService.setStatus(ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_PENDING);
          this.approvalStatusQueryService.queryApprovalStatuses();
          break;
        case ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_APPROVED:
          this.approvalStatusQueryService.setStatus(ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_APPROVED);
          this.approvalStatusQueryService.queryApprovalStatuses();
          break;
        case ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_REJECTED:
          this.approvalStatusQueryService.setStatus(ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_REJECTED);
          this.approvalStatusQueryService.queryApprovalStatuses();
          break;
        case ApprovalConstants.DROPDOWN_VIEW_TYPES.VIEW_ALL:
          this.approvalStatusQueryService.setStatus(null);
          this.approvalStatusQueryService.queryApprovalStatuses();
          break;
        default:
          this.approvalStatusQueryService.setStatus(null);
          this.approvalStatusQueryService.queryApprovalStatuses();
          break;
      }
    } else {
      this.approvalStatusQueryService.setStatus(null);
      this.approvalStatusQueryService.queryApprovalStatuses();
    }
  }

}
