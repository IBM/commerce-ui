/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComIbmCommerceApprovalBeansOrderApprovalStatusListDataBean_IBM_Store_SummaryResultList } from '../models/com-ibm-commerce-approval-beans-order-approval-status-list-data-bean-_ibm_store-_summary-result-list';
import { ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusResponse } from '../models/com-ibm-commerce-rest-approvalstatus-handler-approval-status-handler-update-approval-status-response';
import { ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusParameterDescription } from '../models/com-ibm-commerce-rest-approvalstatus-handler-approval-status-handler-update-approval-status-parameter-description';

/**
 * This class provides RESTful services to approve or reject registrations.
 */
@Injectable()
class ApprovalStatusService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets a list of approval records details that the current authenticated user can approve.
   * @param params The `ApprovalStatusService.ApprovalStatusFindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `q`: The query name.
   *
   * - `submitterMiddleName`: Query by approval request submitter's middle name.
   *
   * - `submitterLastName`: Query by approval request submitter's last name.
   *
   * - `submitterFirstName`: Query by approval request submitter's first name.
   *
   * - `status`: Query by approval request status. 0 for pending, 1 for approved, 2 for rejected.
   *
   * - `startSubmitTime`: Query by approval request start time.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The 'pageNumber' must be specified for paging to work.
   *
   * - `pageNumber`: Page number, starting at 1. Valid values include positive integers of 1 and above. The 'pageSize' must be specified for paging to work.
   *
   * - `orderBy`: Order by.
   *
   * - `entityId`: Query by approval request entity id, such as order id.
   *
   * - `endSubmitTime`: Query by approval request end time.
   *
   * - `approverId`: Query by approver id. Only returns approval requests that can be approved by the current user.
   *
   * - `approvalStatusId`: Query by approval request approval status id.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusFindByQueryResponse(params: ApprovalStatusService.ApprovalStatusFindByQueryParams): Observable<StrictHttpResponse<ComIbmCommerceApprovalBeansOrderApprovalStatusListDataBean_IBM_Store_SummaryResultList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.submitterMiddleName != null) __params = __params.set('submitterMiddleName', params.submitterMiddleName.toString());
    if (params.submitterLastName != null) __params = __params.set('submitterLastName', params.submitterLastName.toString());
    if (params.submitterFirstName != null) __params = __params.set('submitterFirstName', params.submitterFirstName.toString());
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.startSubmitTime != null) __params = __params.set('startSubmitTime', params.startSubmitTime.toString());
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.orderBy != null) __params = __params.set('orderBy', params.orderBy.toString());
    if (params.entityId != null) __params = __params.set('entityId', params.entityId.toString());
    if (params.endSubmitTime != null) __params = __params.set('endSubmitTime', params.endSubmitTime.toString());
    if (params.approverId != null) __params = __params.set('approverId', params.approverId.toString());
    if (params.approvalStatusId != null) __params = __params.set('approvalStatusId', params.approvalStatusId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/approval_status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceApprovalBeansOrderApprovalStatusListDataBean_IBM_Store_SummaryResultList>;
      })
    );
  }

  /**
   * Gets a list of approval records details that the current authenticated user can approve.
   * @param params The `ApprovalStatusService.ApprovalStatusFindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `q`: The query name.
   *
   * - `submitterMiddleName`: Query by approval request submitter's middle name.
   *
   * - `submitterLastName`: Query by approval request submitter's last name.
   *
   * - `submitterFirstName`: Query by approval request submitter's first name.
   *
   * - `status`: Query by approval request status. 0 for pending, 1 for approved, 2 for rejected.
   *
   * - `startSubmitTime`: Query by approval request start time.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The 'pageNumber' must be specified for paging to work.
   *
   * - `pageNumber`: Page number, starting at 1. Valid values include positive integers of 1 and above. The 'pageSize' must be specified for paging to work.
   *
   * - `orderBy`: Order by.
   *
   * - `entityId`: Query by approval request entity id, such as order id.
   *
   * - `endSubmitTime`: Query by approval request end time.
   *
   * - `approverId`: Query by approver id. Only returns approval requests that can be approved by the current user.
   *
   * - `approvalStatusId`: Query by approval request approval status id.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusFindByQuery(params: ApprovalStatusService.ApprovalStatusFindByQueryParams): Observable<ComIbmCommerceApprovalBeansOrderApprovalStatusListDataBean_IBM_Store_SummaryResultList> {
    return this.ApprovalStatusFindByQueryResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Approve or reject an approval record.
   * @param params The `ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * - `approvalStatusId`: The approval status ID.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `action`: The action name.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusUpdateApprovalStatusResponse(params: ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams): Observable<StrictHttpResponse<ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.action != null) __params = __params.set('action', params.action.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/approval_status/${params.approvalStatusId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusResponse>;
      })
    );
  }

  /**
   * Approve or reject an approval record.
   * @param params The `ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * - `approvalStatusId`: The approval status ID.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `action`: The action name.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusUpdateApprovalStatus(params: ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams): Observable<ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusResponse> {
    return this.ApprovalStatusUpdateApprovalStatusResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module ApprovalStatusService {

  /**
   * Parameters for ApprovalStatusFindByQuery
   */
  export interface ApprovalStatusFindByQueryParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The query name.
     */
    q: 'all' | 'buyerApprovals';

    /**
     * Query by approval request submitter's middle name.
     */
    submitterMiddleName?: string;

    /**
     * Query by approval request submitter's last name.
     */
    submitterLastName?: string;

    /**
     * Query by approval request submitter's first name.
     */
    submitterFirstName?: string;

    /**
     * Query by approval request status. 0 for pending, 1 for approved, 2 for rejected.
     */
    status?: number;

    /**
     * Query by approval request start time.
     */
    startSubmitTime?: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The 'pageNumber' must be specified for paging to work.
     */
    pageSize?: number;

    /**
     * Page number, starting at 1. Valid values include positive integers of 1 and above. The 'pageSize' must be specified for paging to work.
     */
    pageNumber?: number;

    /**
     * Order by.
     */
    orderBy?: 'A-approvalStatusId' | 'A-entityId' | 'A-submitTime' | 'A-approveTime' | 'A-status' | 'A-flowTypeId' | 'A-stateId' | 'D-approvalStatusId' | 'D-entityId' | 'D-submitTime' | 'D-approveTime' | 'D-status' | 'D-flowTypeId' | 'D-stateId';

    /**
     * Query by approval request entity id, such as order id.
     */
    entityId?: number;

    /**
     * Query by approval request end time.
     */
    endSubmitTime?: string;

    /**
     * Query by approver id. Only returns approval requests that can be approved by the current user.
     */
    approverId?: number;

    /**
     * Query by approval request approval status id.
     */
    approvalStatusId?: number;
  }

  /**
   * Parameters for ApprovalStatusUpdateApprovalStatus
   */
  export interface ApprovalStatusUpdateApprovalStatusParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body.
     */
    body: ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusParameterDescription;

    /**
     * The approval status ID.
     */
    approvalStatusId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * The action name.
     */
    action?: 'updateApprovalStatus';
  }
}

export { ApprovalStatusService }
