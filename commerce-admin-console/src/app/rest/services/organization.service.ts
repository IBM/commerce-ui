/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-_org-entity-identity';
import { ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityAddRequest } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-_org-entity-add-request';
import { ComIbmCommerceUserBeansOrganizationSearchDataBean_IBM_Organization_List_Details } from '../models/com-ibm-commerce-user-beans-organization-search-data-bean-_ibm_organization-_list-_details';
import { ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityUpdateRequest } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-_org-entity-update-request';
import { ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroupsResponse } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-_update-approval-groups-response';
import { ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroups } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-_update-approval-groups';
import { ComIbmCommerceUserBeansOrgEntityDataBean_IBM_Parent_Assigned_Roles_Details } from '../models/com-ibm-commerce-user-beans-org-entity-data-bean-_ibm_parent-_assigned-_roles-_details';
import { ComIbmCommerceMemberBeansOrganizationListDataBean_IBM_Organization_Summary } from '../models/com-ibm-commerce-member-beans-organization-list-data-bean-_ibm_organization-_summary';
import { ComIbmCommerceRestMemberHandlerOrganizationHandlerOrgEntityBuyerIdentifier } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-org-entity-buyer-identifier';
import { ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest } from '../models/com-ibm-commerce-rest-member-handler-organization-handler-buyer-registration-add-request';

/**
 * This class provides RESTful services to register an organization, to get or update organization information.
 */
@Injectable()
class OrganizationService extends BaseService {
  constructor(
    config: ApiConfiguration,
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
  OrganizationRegisterOrganizationResponse(params: OrganizationService.OrganizationRegisterOrganizationParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/organization`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity>;
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
  OrganizationRegisterOrganization(params: OrganizationService.OrganizationRegisterOrganizationParams): Observable<ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity> {
    return this.OrganizationRegisterOrganizationResponse(params).pipe(
      __map(_r => _r.body)
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
   * - `startIndex`: The starting index of the result.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.
   *
   * - `parentOrgName`: The parent organization name.
   *
   * - `orgName`: The organization name.
   *
   * - `orgId`: The organization identifier.
   *
   * - `maxResults`: The maximum number of results to be returned.
   *
   * - `accountId`: The trading account ID.
   *
   * @return The requested completed successfully.
   */
  OrganizationFindByQueryResponse(params: OrganizationService.OrganizationFindByQueryParams): Observable<StrictHttpResponse<ComIbmCommerceUserBeansOrganizationSearchDataBean_IBM_Organization_List_Details>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.parentOrgName != null) __params = __params.set('parentOrgName', params.parentOrgName.toString());
    if (params.orgName != null) __params = __params.set('orgName', params.orgName.toString());
    if (params.orgId != null) __params = __params.set('orgId', params.orgId.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.accountId != null) __params = __params.set('accountId', params.accountId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/organization`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceUserBeansOrganizationSearchDataBean_IBM_Organization_List_Details>;
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
   * - `startIndex`: The starting index of the result.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.
   *
   * - `parentOrgName`: The parent organization name.
   *
   * - `orgName`: The organization name.
   *
   * - `orgId`: The organization identifier.
   *
   * - `maxResults`: The maximum number of results to be returned.
   *
   * - `accountId`: The trading account ID.
   *
   * @return The requested completed successfully.
   */
  OrganizationFindByQuery(params: OrganizationService.OrganizationFindByQueryParams): Observable<ComIbmCommerceUserBeansOrganizationSearchDataBean_IBM_Organization_List_Details> {
    return this.OrganizationFindByQueryResponse(params).pipe(
      __map(_r => _r.body)
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
  OrganizationUpdateOrganizationResponse(params: OrganizationService.OrganizationUpdateOrganizationParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/organization/${params.organizationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity>;
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
  OrganizationUpdateOrganization(params: OrganizationService.OrganizationUpdateOrganizationParams): Observable<ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityIdentity> {
    return this.OrganizationUpdateOrganizationResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates an approval group.
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
  OrganizationUpdateApprovalGroupsResponse(params: OrganizationService.OrganizationUpdateApprovalGroupsParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroupsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.action != null) __params = __params.set('action', params.action.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/organization/${params.organizationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroupsResponse>;
      })
    );
  }

  /**
   * Updates an approval group.
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
  OrganizationUpdateApprovalGroups(params: OrganizationService.OrganizationUpdateApprovalGroupsParams): Observable<ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroupsResponse> {
    return this.OrganizationUpdateApprovalGroupsResponse(params).pipe(
      __map(_r => _r.body)
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
  OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameResponse(params: OrganizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams): Observable<StrictHttpResponse<ComIbmCommerceUserBeansOrgEntityDataBean_IBM_Parent_Assigned_Roles_Details>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/organization/${params.organizationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceUserBeansOrgEntityDataBean_IBM_Parent_Assigned_Roles_Details>;
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
  OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileName(params: OrganizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameParams): Observable<ComIbmCommerceUserBeansOrgEntityDataBean_IBM_Parent_Assigned_Roles_Details> {
    return this.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileNameResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Get user's entitled organizations.
   * @param params The `OrganizationService.OrganizationGetEntitledOrganizationsParams` containing the following parameters:
   *
   * - `storeId`:
   *
   * - `responseFormat`:
   *
   * - `explicitEntitlement`:
   *
   * - `accountCheck`:
   *
   * @return The requested completed successfully.
   */
  OrganizationGetEntitledOrganizationsResponse(params: OrganizationService.OrganizationGetEntitledOrganizationsParams): Observable<StrictHttpResponse<ComIbmCommerceMemberBeansOrganizationListDataBean_IBM_Organization_Summary>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.explicitEntitlement != null) __params = __params.set('explicitEntitlement', params.explicitEntitlement.toString());
    if (params.accountCheck != null) __params = __params.set('accountCheck', params.accountCheck.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/organization/@self/entitled_orgs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceMemberBeansOrganizationListDataBean_IBM_Organization_Summary>;
      })
    );
  }

  /**
   * Get user's entitled organizations.
   * @param params The `OrganizationService.OrganizationGetEntitledOrganizationsParams` containing the following parameters:
   *
   * - `storeId`:
   *
   * - `responseFormat`:
   *
   * - `explicitEntitlement`:
   *
   * - `accountCheck`:
   *
   * @return The requested completed successfully.
   */
  OrganizationGetEntitledOrganizations(params: OrganizationService.OrganizationGetEntitledOrganizationsParams): Observable<ComIbmCommerceMemberBeansOrganizationListDataBean_IBM_Organization_Summary> {
    return this.OrganizationGetEntitledOrganizationsResponse(params).pipe(
      __map(_r => _r.body)
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
  OrganizationRegisterBuyerOrganizationResponse(params: OrganizationService.OrganizationRegisterBuyerOrganizationParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandlerOrgEntityBuyerIdentifier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/organization/buyer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerOrganizationHandlerOrgEntityBuyerIdentifier>;
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
  OrganizationRegisterBuyerOrganization(params: OrganizationService.OrganizationRegisterBuyerOrganizationParams): Observable<ComIbmCommerceRestMemberHandlerOrganizationHandlerOrgEntityBuyerIdentifier> {
    return this.OrganizationRegisterBuyerOrganizationResponse(params).pipe(
      __map(_r => _r.body)
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
    body?: ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityAddRequest;
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
     * The starting index of the result.
     */
    startIndex?: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query.
     */
    profileName?: 'IBM_Store_Summary' | 'IBM_Organization_List_Summary' | 'IBM_Organization_List_Short_Summary' | 'IBM_Organization_List_Details' | 'IBM_Roles_To_Assign_Details';

    /**
     * The parent organization name.
     */
    parentOrgName?: string;

    /**
     * The organization name.
     */
    orgName?: string;

    /**
     * The organization identifier.
     */
    orgId?: string;

    /**
     * The maximum number of results to be returned.
     */
    maxResults?: string;

    /**
     * The trading account ID.
     */
    accountId?: string;
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
    body?: ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityUpdateRequest;
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
    action: 'updateApprovalGroups';

    /**
     * Request body.
     */
    body?: ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroups;
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
   * Parameters for OrganizationGetEntitledOrganizations
   */
  export interface OrganizationGetEntitledOrganizationsParams {
    storeId: string;
    responseFormat?: string;
    explicitEntitlement?: string;
    accountCheck?: string;
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
    body: ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }
}

export { OrganizationService }
