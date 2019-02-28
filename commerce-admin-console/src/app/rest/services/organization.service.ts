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
class OrganizationService extends __BaseService {
  static readonly OrganizationRegisterOrganizationPath = '/wcs/resources/store/{storeId}/organization';
  static readonly OrganizationFindByQueryPath = '/wcs/resources/store/{storeId}/organization';
  static readonly OrganizationUpdateOrganizationPath = '/wcs/resources/store/{storeId}/organization/{organizationId}';
  static readonly OrganizationUpdateApprovalGroupsPath = '/wcs/resources/store/{storeId}/organization/{organizationId}';
  static readonly OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNamePath = '/wcs/resources/store/{storeId}/organization/{organizationId}';
  static readonly OrganizationLockPath = '/wcs/resources/store/{storeId}/organization/{organizationId}/lock';
  static readonly OrganizationUnlockPath = '/wcs/resources/store/{storeId}/organization/{organizationId}/unlock';
  static readonly OrganizationGetEntitledOrganizationsPath = '/wcs/resources/store/{storeId}/organization/@self/entitled_orgs';
  static readonly OrganizationRegisterBuyerOrganizationPath = '/wcs/resources/store/{storeId}/organization/buyer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Allows an administrator to register an organization.
   * @param params The `OrganizationService.OrganizationRegisterOrganizationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  OrganizationRegisterOrganizationResponse(params: OrganizationService.OrganizationRegisterOrganizationParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization`,
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
   * Allows an administrator to register an organization.
   * @param params The `OrganizationService.OrganizationRegisterOrganizationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  OrganizationRegisterOrganization(params: OrganizationService.OrganizationRegisterOrganizationParams): __Observable<any> {
    return this.OrganizationRegisterOrganizationResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * This allows an administrator to find organizations based on query name. See each query for details on input and output.
   * @param params The `OrganizationService.OrganizationFindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The storeId.
   *
   * - `q`: The query name. <ul><li>organizationHierarchy: Retrieves the organization hierarchy.</li><li>organizationsICanAdmin: This allows an administrator to find organizations that he/she can administer.</li><li>rolesICanAssignInOrg: This allows an administrator to find roles that he/she can assign in organizations.</li></ul>
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.
   *
   * - `accountId`: The trading account ID.
   *
   * - `orgId`: The organization identifier.
   *
   * - `orgName`: The organization name.
   *
   * - `parentOrgName`: The parent organization name.
   *
   * - `startIndex`: The starting index of the result.
   *
   * - `maxResults`: The maximum number of results to be returned.
   *
   * @return The requested completed successfully.
   */
  OrganizationFindByQueryResponse(params: OrganizationService.OrganizationFindByQueryParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.accountId != null) __params = __params.set('accountId', params.accountId.toString());
    if (params.orgId != null) __params = __params.set('orgId', params.orgId.toString());
    if (params.orgName != null) __params = __params.set('orgName', params.orgName.toString());
    if (params.parentOrgName != null) __params = __params.set('parentOrgName', params.parentOrgName.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization`,
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
   * This allows an administrator to find organizations based on query name. See each query for details on input and output.
   * @param params The `OrganizationService.OrganizationFindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The storeId.
   *
   * - `q`: The query name. <ul><li>organizationHierarchy: Retrieves the organization hierarchy.</li><li>organizationsICanAdmin: This allows an administrator to find organizations that he/she can administer.</li><li>rolesICanAssignInOrg: This allows an administrator to find roles that he/she can assign in organizations.</li></ul>
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.
   *
   * - `accountId`: The trading account ID.
   *
   * - `orgId`: The organization identifier.
   *
   * - `orgName`: The organization name.
   *
   * - `parentOrgName`: The parent organization name.
   *
   * - `startIndex`: The starting index of the result.
   *
   * - `maxResults`: The maximum number of results to be returned.
   *
   * @return The requested completed successfully.
   */
  OrganizationFindByQuery(params: OrganizationService.OrganizationFindByQueryParams): __Observable<any> {
    return this.OrganizationFindByQueryResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * This allows an administrator to update information of an organization.
   * @param params The `OrganizationService.OrganizationUpdateOrganizationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  OrganizationUpdateOrganizationResponse(params: OrganizationService.OrganizationUpdateOrganizationParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/${params.organizationId}`,
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
   * This allows an administrator to update information of an organization.
   * @param params The `OrganizationService.OrganizationUpdateOrganizationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  OrganizationUpdateOrganization(params: OrganizationService.OrganizationUpdateOrganizationParams): __Observable<any> {
    return this.OrganizationUpdateOrganizationResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Performs an action on an organization. See each action for details on input and output. Actions include: updating an approval group, and assigning or unassigning one or more roles from an organization
   * @param params The `OrganizationService.OrganizationUpdateApprovalGroupsParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `action`: The action of the rest service.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  OrganizationUpdateApprovalGroupsResponse(params: OrganizationService.OrganizationUpdateApprovalGroupsParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.action != null) __params = __params.set('action', params.action.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/${params.organizationId}`,
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
   * Performs an action on an organization. See each action for details on input and output. Actions include: updating an approval group, and assigning or unassigning one or more roles from an organization
   * @param params The `OrganizationService.OrganizationUpdateApprovalGroupsParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `action`: The action of the rest service.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  OrganizationUpdateApprovalGroups(params: OrganizationService.OrganizationUpdateApprovalGroupsParams): __Observable<any> {
    return this.OrganizationUpdateApprovalGroupsResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Allows administrators to find organization information by organization identifier.
   * @param params The `OrganizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. Default profile name = IBM_Organization_Summary.
   *
   * @return The requested completed successfully.
   */
  OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameResponse(params: OrganizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/${params.organizationId}`,
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
   * Allows administrators to find organization information by organization identifier.
   * @param params The `OrganizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. Default profile name = IBM_Organization_Summary.
   *
   * @return The requested completed successfully.
   */
  OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileName(params: OrganizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams): __Observable<any> {
    return this.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Updates an organization to a locked status. When locked the organization's status is -1.
   * @param params The `OrganizationService.OrganizationLockParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   */
  OrganizationLockResponse(params: OrganizationService.OrganizationLockParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/${params.organizationId}/lock`,
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
   * Updates an organization to a locked status. When locked the organization's status is -1.
   * @param params The `OrganizationService.OrganizationLockParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   */
  OrganizationLock(params: OrganizationService.OrganizationLockParams): __Observable<null> {
    return this.OrganizationLockResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates an organization to an unlocked status. When unlocked the organization's status is 0.
   * @param params The `OrganizationService.OrganizationUnlockParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   */
  OrganizationUnlockResponse(params: OrganizationService.OrganizationUnlockParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/${params.organizationId}/unlock`,
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
   * Updates an organization to an unlocked status. When unlocked the organization's status is 0.
   * @param params The `OrganizationService.OrganizationUnlockParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `organizationId`: The organization identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   */
  OrganizationUnlock(params: OrganizationService.OrganizationUnlockParams): __Observable<null> {
    return this.OrganizationUnlockResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get user's entitled organizations.
   * @param params The `OrganizationService.OrganizationGetEntitledOrganizationsParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `accountCheck`:
   *
   * - `explicitEntitlement`:
   *
   * @return The requested completed successfully.
   */
  OrganizationGetEntitledOrganizationsResponse(params: OrganizationService.OrganizationGetEntitledOrganizationsParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.accountCheck != null) __params = __params.set('accountCheck', params.accountCheck.toString());
    if (params.explicitEntitlement != null) __params = __params.set('explicitEntitlement', params.explicitEntitlement.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/@self/entitled_orgs`,
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
   * Get user's entitled organizations.
   * @param params The `OrganizationService.OrganizationGetEntitledOrganizationsParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `accountCheck`:
   *
   * - `explicitEntitlement`:
   *
   * @return The requested completed successfully.
   */
  OrganizationGetEntitledOrganizations(params: OrganizationService.OrganizationGetEntitledOrganizationsParams): __Observable<any> {
    return this.OrganizationGetEntitledOrganizationsResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Registers a new Buyer Organization as well as the initial Buyer Administrator for the new organization.
   * @param params The `OrganizationService.OrganizationRegisterBuyerOrganizationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  OrganizationRegisterBuyerOrganizationResponse(params: OrganizationService.OrganizationRegisterBuyerOrganizationParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/organization/buyer`,
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
   * Registers a new Buyer Organization as well as the initial Buyer Administrator for the new organization.
   * @param params The `OrganizationService.OrganizationRegisterBuyerOrganizationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  OrganizationRegisterBuyerOrganization(params: OrganizationService.OrganizationRegisterBuyerOrganizationParams): __Observable<any> {
    return this.OrganizationRegisterBuyerOrganizationResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }
}

module OrganizationService {

  /**
   * Parameters for OrganizationRegisterOrganization
   */
  export interface OrganizationRegisterOrganizationParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body.
     */
    body?: any;
  }

  /**
   * Parameters for OrganizationFindByQuery
   */
  export interface OrganizationFindByQueryParams {

    /**
     * The storeId.
     */
    storeId: string;

    /**
     * The query name. <ul><li>organizationHierarchy: Retrieves the organization hierarchy.</li><li>organizationsICanAdmin: This allows an administrator to find organizations that he/she can administer.</li><li>rolesICanAssignInOrg: This allows an administrator to find roles that he/she can assign in organizations.</li></ul>
     */
    q: 'organizationHierarchy' | 'organizationsICanAdmin' | 'rolesICanAssignInOrg';

    /**
     * Profile name. Profiles determine the subset of data returned by a query.
     */
    profileName?: 'IBM_Store_Summary' | 'IBM_Organization_List_Summary' | 'IBM_Organization_List_Short_Summary' | 'IBM_Organization_List_Details' | 'IBM_Roles_To_Assign_Details';

    /**
     * The trading account ID.
     */
    accountId?: string;

    /**
     * The organization identifier.
     */
    orgId?: string;

    /**
     * The organization name.
     */
    orgName?: string;

    /**
     * The parent organization name.
     */
    parentOrgName?: string;

    /**
     * The starting index of the result.
     */
    startIndex?: string;

    /**
     * The maximum number of results to be returned.
     */
    maxResults?: string;
  }

  /**
   * Parameters for OrganizationUpdateOrganization
   */
  export interface OrganizationUpdateOrganizationParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The organization identifier.
     */
    organizationId: string;

    /**
     * Request body.
     */
    body?: any;
  }

  /**
   * Parameters for OrganizationUpdateApprovalGroups
   */
  export interface OrganizationUpdateApprovalGroupsParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The organization identifier.
     */
    organizationId: string;

    /**
     * The action of the rest service.
     */
    action: 'updateApprovalGroups' | 'assignRole' | 'unassignRole';

    /**
     * Request body.
     */
    body?: any;
  }

  /**
   * Parameters for OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileName
   */
  export interface OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The organization identifier.
     */
    organizationId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query. Default profile name = IBM_Organization_Summary.
     */
    profileName?: 'IBM_Organization_Short_Summary' | 'IBM_Organization_Summary' | 'IBM_Organization_Details' | 'IBM_Org_Entity_Details' | 'IBM_Assigned_Roles_Details' | 'IBM_Parent_Assigned_Roles_Details';
  }

  /**
   * Parameters for OrganizationLock
   */
  export interface OrganizationLockParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The organization identifier.
     */
    organizationId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for OrganizationUnlock
   */
  export interface OrganizationUnlockParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The organization identifier.
     */
    organizationId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for OrganizationGetEntitledOrganizations
   */
  export interface OrganizationGetEntitledOrganizationsParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
    accountCheck?: string;
    explicitEntitlement?: string;
  }

  /**
   * Parameters for OrganizationRegisterBuyerOrganization
   */
  export interface OrganizationRegisterBuyerOrganizationParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body.
     */
    body: any;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }
}

export { OrganizationService }
