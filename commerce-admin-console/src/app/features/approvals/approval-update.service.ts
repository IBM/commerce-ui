import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApprovalStatusService } from '../../rest/services/approval-status.service';
import { ApprovalConstants } from './approval.constants';
import { ApprovalStatusQueryService } from './approvals-status-query.service';


@Injectable()
export class ApprovalUpdateService {

    private readonly UPDATE_APPROVAL_ACTION = 'updateApprovalStatus';

    private readonly APPROVE_ACTION_ID = '1';
    private readonly REJECT_ACTION_ID = '2';

    constructor(private readonly approvalStatusService: ApprovalStatusService, private readonly approvalStatusQueryService: ApprovalStatusQueryService) {
        
    }

    private approvalUpdateEventSource = new Subject<string>();

    approvalUpdateEvent$ = this.approvalUpdateEventSource.asObservable();

    public approve() {
        this.approvalUpdateEventSource.next(ApprovalConstants.APPROVE_EVENT);
    }

    public reject() {
        this.approvalUpdateEventSource.next(ApprovalConstants.REJECT_EVENT);
    }

    public approveSelected(selectedRequests: string[]) {
        selectedRequests.forEach(requestId => {
            console.log(requestId);
            let response = this.approvalStatusService.ApprovalStatusUpdateApprovalStatus({
                'storeId': ApprovalConstants.DEFAULT_STORE_ID,
                'body': {
                    'comments': '',
                    'aprv_act': this.APPROVE_ACTION_ID,
                },
                'approvalStatusId': requestId,
                'responseFormat': ApprovalConstants.RESPONSE_TYPE_JSON,
                'action': this.UPDATE_APPROVAL_ACTION
            });
            response.subscribe((response) => {
                if (response.resultmsg === ApprovalConstants.APPROVE_SUCCESS_MESSAGE) {
                    this.approvalStatusQueryService.queryApprovalStatuses();
                }
            });
        });
    }

    public rejectSelected(selectedRequests: string[]) {
        selectedRequests.forEach(requestId => {
            let response = this.approvalStatusService.ApprovalStatusUpdateApprovalStatus({
                'storeId': ApprovalConstants.DEFAULT_STORE_ID,
                'body': {
                    'comments': '',
                    'aprv_act': this.REJECT_ACTION_ID,
                },
                'approvalStatusId': requestId,
                'responseFormat': ApprovalConstants.RESPONSE_TYPE_JSON,
                'action': this.UPDATE_APPROVAL_ACTION
            });
            response.subscribe((response) => {
                if (response.resultmsg === ApprovalConstants.REJECT_SUCCESS_MESSAGE) {
                    this.approvalStatusQueryService.queryApprovalStatuses();
                }
            });
        });
    }
}