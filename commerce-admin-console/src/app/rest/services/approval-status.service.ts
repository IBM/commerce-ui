/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class ApprovalStatusService extends __BaseService {
  static readonly findAllPath = '/rest/admin/v2/approval-statuses';
  static readonly findByApprovalStatusIdPath = '/rest/admin/v2/approval-statuses/{id}';
  static readonly updateApprovalStatusPath = '/rest/admin/v2/approval-statuses/{id}';
  static readonly ApprovalStatusFindByQueryPath = '/wcs/resources/store/{storeId}/approval_status';
  static readonly ApprovalStatusUpdateApprovalStatusPath = '/wcs/resources/store/{storeId}/approval_status/{approvalStatusId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ApprovalStatusService.FindAllParams` containing the following parameters:
   *
   * - `status`: Query by approval request status.
   *
   * - `flowTypeId`: Query by flow type identifier which must be one of the values listed below.
   *    * 10001 - RFQ response
   *    * 10002 - Order approval
   *    * 10003 - Contract approval
   *    * 10004 - Buyer approval
   *    * 10005 - Seller org approval
   *    * 10006 - Seller approval
   *
   * - `submitterMiddleName`: Query by approval request submitter's middle name.
   *
   * - `submitterLastName`: Query by approval request submitter's last name.
   *
   * - `startSubmitDate`: Query by approval request start time formatted as standard ISO date and time.
   *
   * - `endSubmitDate`: Query by approval request end time formatted as standard ISO date and time.
   *
   * - `submitterFirstName`: Query by approval request submitter's first name.
   *
   * - `id`: Query by approval request approval status ID.
   *
   * - `entityId`: Query by approval request entity ID, such as order ID.
   *
   * - `approverId`: Query by approver ID. Only returns approval requests that can be approved by the current user.
   *
   * - `sort`: The sort order of the properties in the response message. Properties can be prefixed with a + or - sign to indicate ascending or descending sort order, for example +entityId. The default sort order is ascending.
   *
   * - `offset`: Offset, starting at 0. Valid values include positive integers of 1 and above. The "limit" must be specified for paging to work.
   *
   * - `limit`: Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "offset" must be specified for paging to work.
   *
   * @return The requested completed successfully.
   */
  findAllResponse(params: ApprovalStatusService.FindAllParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.flowTypeId != null) __params = __params.set('flowTypeId', params.flowTypeId.toString());
    if (params.submitterMiddleName != null) __params = __params.set('submitterMiddleName', params.submitterMiddleName.toString());
    if (params.submitterLastName != null) __params = __params.set('submitterLastName', params.submitterLastName.toString());
    if (params.startSubmitDate != null) __params = __params.set('startSubmitDate', params.startSubmitDate.toString());
    if (params.endSubmitDate != null) __params = __params.set('endSubmitDate', params.endSubmitDate.toString());
    if (params.submitterFirstName != null) __params = __params.set('submitterFirstName', params.submitterFirstName.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.entityId != null) __params = __params.set('entityId', params.entityId.toString());
    if (params.approverId != null) __params = __params.set('approverId', params.approverId.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/approval-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * @param params The `ApprovalStatusService.FindAllParams` containing the following parameters:
   *
   * - `status`: Query by approval request status.
   *
   * - `flowTypeId`: Query by flow type identifier which must be one of the values listed below.
   *    * 10001 - RFQ response
   *    * 10002 - Order approval
   *    * 10003 - Contract approval
   *    * 10004 - Buyer approval
   *    * 10005 - Seller org approval
   *    * 10006 - Seller approval
   *
   * - `submitterMiddleName`: Query by approval request submitter's middle name.
   *
   * - `submitterLastName`: Query by approval request submitter's last name.
   *
   * - `startSubmitDate`: Query by approval request start time formatted as standard ISO date and time.
   *
   * - `endSubmitDate`: Query by approval request end time formatted as standard ISO date and time.
   *
   * - `submitterFirstName`: Query by approval request submitter's first name.
   *
   * - `id`: Query by approval request approval status ID.
   *
   * - `entityId`: Query by approval request entity ID, such as order ID.
   *
   * - `approverId`: Query by approver ID. Only returns approval requests that can be approved by the current user.
   *
   * - `sort`: The sort order of the properties in the response message. Properties can be prefixed with a + or - sign to indicate ascending or descending sort order, for example +entityId. The default sort order is ascending.
   *
   * - `offset`: Offset, starting at 0. Valid values include positive integers of 1 and above. The "limit" must be specified for paging to work.
   *
   * - `limit`: Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "offset" must be specified for paging to work.
   *
   * @return The requested completed successfully.
   */
  findAll(params: ApprovalStatusService.FindAllParams): __Observable<any> {
    return this.findAllResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * @param id The unique numeric ID for identifying the approval status record.
   * @return The requested completed successfully.
   */
  findByApprovalStatusIdResponse(id: string): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/approval-statuses/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * @param id The unique numeric ID for identifying the approval status record.
   * @return The requested completed successfully.
   */
  findByApprovalStatusId(id: string): __Observable<any> {
    return this.findByApprovalStatusIdResponse(id).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * @param params The `ApprovalStatusService.UpdateApprovalStatusParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the approval status record.
   *
   * - `body`: The request body for updating an approval status record.
   */
  updateApprovalStatusResponse(params: ApprovalStatusService.UpdateApprovalStatusParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/approval-statuses/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }

  /**
   * @param params The `ApprovalStatusService.UpdateApprovalStatusParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the approval status record.
   *
   * - `body`: The request body for updating an approval status record.
   */
  updateApprovalStatus(params: ApprovalStatusService.UpdateApprovalStatusParams): __Observable<null> {
    return this.updateApprovalStatusResponse(params).pipe(
      __map(_r => _r.body as null)
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
   * - `submitterFirstName`: Query by approval request submitter's first name.
   *
   * - `submitterMiddleName`: Query by approval request submitter's middle name.
   *
   * - `submitterLastName`: Query by approval request submitter's last name.
   *
   * - `startSubmitTime`: Query by approval request start time.
   *
   * - `endSubmitTime`: Query by approval request end time.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `approvalStatusId`: Query by approval request approval status id.
   *
   * - `entityId`: Query by approval request entity id, such as order id.
   *
   * - `approverId`: Query by approver id. Only returns approval requests that can be approved by the current user.
   *
   * - `orderBy`: Order by.
   *
   * - `pageNumber`: Page number, starting at 1. Valid values include positive integers of 1 and above. The 'pageSize' must be specified for paging to work.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The 'pageNumber' must be specified for paging to work.
   *
   * - `status`: Query by approval request status. 0 for pending, 1 for approved, 2 for rejected.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusFindByQueryResponse(params: ApprovalStatusService.ApprovalStatusFindByQueryParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.submitterFirstName != null) __params = __params.set('submitterFirstName', params.submitterFirstName.toString());
    if (params.submitterMiddleName != null) __params = __params.set('submitterMiddleName', params.submitterMiddleName.toString());
    if (params.submitterLastName != null) __params = __params.set('submitterLastName', params.submitterLastName.toString());
    if (params.startSubmitTime != null) __params = __params.set('startSubmitTime', params.startSubmitTime.toString());
    if (params.endSubmitTime != null) __params = __params.set('endSubmitTime', params.endSubmitTime.toString());
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.approvalStatusId != null) __params = __params.set('approvalStatusId', params.approvalStatusId.toString());
    if (params.entityId != null) __params = __params.set('entityId', params.entityId.toString());
    if (params.approverId != null) __params = __params.set('approverId', params.approverId.toString());
    if (params.orderBy != null) __params = __params.set('orderBy', params.orderBy.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.status != null) __params = __params.set('status', params.status.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/approval_status`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
   * - `submitterFirstName`: Query by approval request submitter's first name.
   *
   * - `submitterMiddleName`: Query by approval request submitter's middle name.
   *
   * - `submitterLastName`: Query by approval request submitter's last name.
   *
   * - `startSubmitTime`: Query by approval request start time.
   *
   * - `endSubmitTime`: Query by approval request end time.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `approvalStatusId`: Query by approval request approval status id.
   *
   * - `entityId`: Query by approval request entity id, such as order id.
   *
   * - `approverId`: Query by approver id. Only returns approval requests that can be approved by the current user.
   *
   * - `orderBy`: Order by.
   *
   * - `pageNumber`: Page number, starting at 1. Valid values include positive integers of 1 and above. The 'pageSize' must be specified for paging to work.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The 'pageNumber' must be specified for paging to work.
   *
   * - `status`: Query by approval request status. 0 for pending, 1 for approved, 2 for rejected.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusFindByQuery(params: ApprovalStatusService.ApprovalStatusFindByQueryParams): __Observable<any> {
    return this.ApprovalStatusFindByQueryResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Approve or reject an approval record.
   * @param params The `ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `approvalStatusId`: The approval status ID.
   *
   * - `body`: Request body.
   *
   * - `action`: The action name.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusUpdateApprovalStatusResponse(params: ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    if (params.action != null) __params = __params.set('action', params.action.toString());
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/approval_status/${params.approvalStatusId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Approve or reject an approval record.
   * @param params The `ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `approvalStatusId`: The approval status ID.
   *
   * - `body`: Request body.
   *
   * - `action`: The action name.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ApprovalStatusUpdateApprovalStatus(params: ApprovalStatusService.ApprovalStatusUpdateApprovalStatusParams): __Observable<any> {
    return this.ApprovalStatusUpdateApprovalStatusResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }
}

module ApprovalStatusService {

  /**
   * Parameters for findAll
   */
  export interface FindAllParams {

    /**
     * Query by approval request status.
     */
    status?: number;

    /**
     * Query by flow type identifier which must be one of the values listed below.
     *  * 10001 - RFQ response
     *  * 10002 - Order approval
     *  * 10003 - Contract approval
     *  * 10004 - Buyer approval
     *  * 10005 - Seller org approval
     *  * 10006 - Seller approval
     */
    flowTypeId?: 10001 | 10002 | 10003 | 10004 | 10005 | 10006;

    /**
     * Query by approval request submitter's middle name.
     */
    submitterMiddleName?: string;

    /**
     * Query by approval request submitter's last name.
     */
    submitterLastName?: string;

    /**
     * Query by approval request start time formatted as standard ISO date and time.
     */
    startSubmitDate?: string;

    /**
     * Query by approval request end time formatted as standard ISO date and time.
     */
    endSubmitDate?: string;

    /**
     * Query by approval request submitter's first name.
     */
    submitterFirstName?: string;

    /**
     * Query by approval request approval status ID.
     */
    id?: number;

    /**
     * Query by approval request entity ID, such as order ID.
     */
    entityId?: number;

    /**
     * Query by approver ID. Only returns approval requests that can be approved by the current user.
     */
    approverId?: number;

    /**
     * The sort order of the properties in the response message. Properties can be prefixed with a + or - sign to indicate ascending or descending sort order, for example +entityId. The default sort order is ascending.
     */
    sort?: 'id' | 'entityId' | 'submitTime' | 'approveTime' | 'status' | 'flowTypeId' | 'stateId';

    /**
     * Offset, starting at 0. Valid values include positive integers of 1 and above. The "limit" must be specified for paging to work.
     */
    offset?: number;

    /**
     * Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The "offset" must be specified for paging to work.
     */
    limit?: number;
  }

  /**
   * Parameters for updateApprovalStatus
   */
  export interface UpdateApprovalStatusParams {

    /**
     * The unique numeric ID for identifying the approval status record.
     */
    id: string;

    /**
     * The request body for updating an approval status record.
     */
    body: any;
  }

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
     * Query by approval request submitter's first name.
     */
    submitterFirstName?: string;

    /**
     * Query by approval request submitter's middle name.
     */
    submitterMiddleName?: string;

    /**
     * Query by approval request submitter's last name.
     */
    submitterLastName?: string;

    /**
     * Query by approval request start time.
     */
    startSubmitTime?: string;

    /**
     * Query by approval request end time.
     */
    endSubmitTime?: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Query by approval request approval status id.
     */
    approvalStatusId?: number;

    /**
     * Query by approval request entity id, such as order id.
     */
    entityId?: number;

    /**
     * Query by approver id. Only returns approval requests that can be approved by the current user.
     */
    approverId?: number;

    /**
     * Order by.
     */
    orderBy?: 'A-approvalStatusId' | 'A-entityId' | 'A-submitTime' | 'A-approveTime' | 'A-status' | 'A-flowTypeId' | 'A-stateId' | 'D-approvalStatusId' | 'D-entityId' | 'D-submitTime' | 'D-approveTime' | 'D-status' | 'D-flowTypeId' | 'D-stateId';

    /**
     * Page number, starting at 1. Valid values include positive integers of 1 and above. The 'pageSize' must be specified for paging to work.
     */
    pageNumber?: number;

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above. The 'pageNumber' must be specified for paging to work.
     */
    pageSize?: number;

    /**
     * Query by approval request status. 0 for pending, 1 for approved, 2 for rejected.
     */
    status?: 0 | 1 | 2;
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
     * The approval status ID.
     */
    approvalStatusId: string;

    /**
     * Request body.
     */
    body: any;

    /**
     * The action name.
     */
    action?: 'updateApprovalStatus';

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }
}

export { ApprovalStatusService }
