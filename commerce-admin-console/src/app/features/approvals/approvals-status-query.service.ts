import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApprovalStatusService } from '../../rest/services/approval-status.service';
import { AppConstants } from '../../app.constants';



@Injectable()
export class ApprovalStatusQueryService {

    private storeId: string | null | undefined;
    private q: 'all' | 'buyerApprovals';
    private submitterFirstName: string | null | undefined;
    private submitterMiddleName: string | null | undefined;
    private submitterLastName: string | null | undefined;
    private startSubmitTime: string | null | undefined;
    private endSubmitTime: string | undefined;
    private status: number | null | undefined;
    private approvalStatusId: number | null | undefined;
    private entityId: number | null | undefined;
    private approverId: number | null | undefined;
    private orderBy: 'A-approvalStatusId' | 'A-entityId' | 'A-submitTime' | 'A-approveTime' | 'A-status' | 'A-flowTypeId' | 'A-stateId' | 'D-approvalStatusId' | 'D-entityId' | 'D-submitTime' | 'D-approveTime' | 'D-status' | 'D-flowTypeId' | 'D-stateId' | null | undefined;
    private pageNumber: number;
    private pageSize: number;

    private approvalStatusQuerySource = new Subject<object>();
    public approvalsData$ = this.approvalStatusQuerySource.asObservable();

    private readonly DEFAULT_PAGE_NUMBER = 1;
    private readonly DEFAULT_PAGE_SIZE = 25;
    private readonly DEFAULT_Q = 'all';

    constructor(private readonly approvalStatusService: ApprovalStatusService) {
        this.storeId = AppConstants.DEFAULT_STORE_ID
        this.pageNumber = this.DEFAULT_PAGE_NUMBER;
        this.pageSize = this.DEFAULT_PAGE_SIZE;
        this.q = this.DEFAULT_Q;
    }

    public getStoreId() {
        return this.storeId;
    }

    public getQ() {
        return this.q;
    }

    public getSubmitterFirstName() {
        return this.submitterFirstName;
    }

    public getSubmitterMiddleName() {
        return this.submitterMiddleName;
    }

    public getSubmitterLastName() {
        return this.submitterLastName;
    }

    public getStartSubmitTime() {
        return this.startSubmitTime;
    }

    public getEndSubmitTime() {
        return this.endSubmitTime;
    }

    public getStatus() {
        return this.status;
    }

    public getApprovalStatusId() {
        return this.approvalStatusId;
    }

    public getEntityId() {
        return this.entityId;
    }

    public getApproverId() {
        return this.approverId;
    }

    public getOrderBy() {
        return this.orderBy;
    }

    public getPageNumber() {
        return this.pageNumber;
    }

    public getPageSize() {
        return this.pageSize;
    }

    public setStoreId(storeId: string) {
        this.storeId = storeId;
    }

    public setQ(q: 'all' | 'buyerApprovals') {
        this.q = q;
    }

    public setSubmitterFirstName(submitterFirstName: string | null | undefined) {
        this.submitterFirstName = submitterFirstName;
    }

    public setSubmitterMiddleName(submitterMiddleName: string | null | undefined) {
        this.submitterMiddleName = submitterMiddleName;
    }

    public setSubmitterLastName(submitterLastName: string | null | undefined) {
        this.submitterLastName = submitterLastName;
    }

    public setStartSubmitTime(startSubmitTime: string | null | undefined) {
        this.startSubmitTime = startSubmitTime;
    }

    public setEndSubmitTime(endSubmitTime: string | null | undefined) {
        this.endSubmitTime = endSubmitTime;
    }

    public setStatus(status: number | null | undefined) {
        this.status = status;
    }

    public setApprovalStatusId(approvalStatusId: number | null | undefined) {
        this.approvalStatusId = approvalStatusId;
    }

    public setEntityId(entityId: number | null | undefined) {
        this.entityId = entityId;
    }

    public setApproverId(approverId: number | null | undefined) {
        this.approverId = approverId;
    }

    public setOrderBy(orderBy: 'A-approvalStatusId' | 'A-entityId' | 'A-submitTime' | 'A-approveTime' | 'A-status' | 'A-flowTypeId' | 'A-stateId' | 'D-approvalStatusId' | 'D-entityId' | 'D-submitTime' | 'D-approveTime' | 'D-status' | 'D-flowTypeId' | 'D-stateId' | null | undefined) {
        this.orderBy = orderBy;
    }

    public setPageNumber(pageNumber: number | null | undefined) {
        this.pageNumber = pageNumber;
    }

    public setPageSize(pageSize: number | null | undefined) {
        this.pageSize = pageSize;
    }

    private generateRequestParameters() {
        return {
            storeId: this.storeId,
            q: this.q,
            submitterFirstName: this.submitterFirstName,
            submitterLastName: this.submitterLastName,
            submitterMiddleName: this.submitterMiddleName,
            startSubmitTime: this.startSubmitTime,
            endSubmitTime: this.endSubmitTime,
            status: this.status,
            approvalStatusId: this.approvalStatusId,
            entityId: this.entityId,
            approverId: this.approverId,
            orderBy: this.orderBy,
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
        };
    }

    public queryApprovalStatuses() {
        let parameters = this.generateRequestParameters();
        let response = this.approvalStatusService.ApprovalStatusFindByQuery(parameters);
        response.subscribe((result: any) => {
            result.pageNumber = parameters.pageNumber;
            this.approvalStatusQuerySource.next(result);
        });
    }
}