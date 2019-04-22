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
class ApiService extends __BaseService {
  static readonly getRestAdminV2MemberGroupsPath = '/rest/admin/v2/member-groups';
  static readonly postRestAdminV2MemberGroupsPath = '/rest/admin/v2/member-groups';
  static readonly getRestAdminV2MemberGroupsByNameAndUsagePath = '/rest/admin/v2/member-groups/by-name-and-usage';
  static readonly deleteRestAdminV2MemberGroupsIdPath = '/rest/admin/v2/member-groups/{id}';
  static readonly getRestAdminV2MemberGroupsIdPath = '/rest/admin/v2/member-groups/{id}';
  static readonly patchRestAdminV2MemberGroupsIdPath = '/rest/admin/v2/member-groups/{id}';
  static readonly postRestAdminV2MemberGroupsIdActivatePath = '/rest/admin/v2/member-groups/{id}/activate';
  static readonly getRestAdminV2MemberGroupsIdConditionElementsPath = '/rest/admin/v2/member-groups/{id}/condition-elements';
  static readonly postRestAdminV2MemberGroupsIdConditionElementsPath = '/rest/admin/v2/member-groups/{id}/condition-elements';
  static readonly deleteRestAdminV2MemberGroupsIdConditionElementsElementIdPath = '/rest/admin/v2/member-groups/{id}/condition-elements/{elementId}';
  static readonly patchRestAdminV2MemberGroupsIdConditionElementsElementIdPath = '/rest/admin/v2/member-groups/{id}/condition-elements/{elementId}';
  static readonly getRestAdminV2MemberGroupsIdDescriptionsPath = '/rest/admin/v2/member-groups/{id}/descriptions';
  static readonly postRestAdminV2MemberGroupsIdDescriptionsPath = '/rest/admin/v2/member-groups/{id}/descriptions';
  static readonly deleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdPath = '/rest/admin/v2/member-groups/{id}/descriptions/{languageId}';
  static readonly getRestAdminV2MemberGroupsIdDescriptionsLanguageIdPath = '/rest/admin/v2/member-groups/{id}/descriptions/{languageId}';
  static readonly patchRestAdminV2MemberGroupsIdDescriptionsLanguageIdPath = '/rest/admin/v2/member-groups/{id}/descriptions/{languageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsParams` containing the following parameters:
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `usage`: The member group's usage. Available values:
   *   * GeneralPurpose - A general grouping of persons and/or organizations.
   *   * AccessControl - A group of persons specified as part of an access control policy.
   *   * CustomerTerritory - A group of customers, typically by territory.
   *   * CustomerServiceRepresentative - A group of customer service representatives, which in turn can have customer territory groups or customer accounts assigned to them.
   *   * RegisteredCustomer - A group of buyer organizations that have registered to a seller organization.
   *   * CustomerPrice - A group of customers that are entitled to get a contract's terms and conditions; often used to enforce custom pricing for the group. Customer price groups can comprise any user, who can be included and excluded explicitly.
   *   * CustomerSegment - A group of persons based on common attributes, for example demographics or purchase history. This group is used in marketing campaigns.
   *   * RFQResponseApproval - An organization that wants request for quote (RFQ) response approvals owns a member group of this usage. The group contains persons that are able to approve RFQ responses.
   *   * DisableInheritedRFQResponseApproval - An organization that does not want request for quote (RFQ) response approvals owns a member group of this usage.
   *   * OrderProcessApproval - An organization that wants order approvals owns a member group of this usage. The group contains persons that are able to approve orders.
   *   * DisableInheritedOrderProcessApproval - An organization that does not want order approvals owns a member group of this usage.
   *   * ContractSubmitApproval - An organization that wants contract approvals owns a member group of this usage. The group contains persons that are able to approve contracts.
   *   * DisableInheritedContractSubmitApproval - An organization that does not want contract approvals owns a member group of this usage.
   *   * UserRegistrationApproval - An organization that wants user registration approvals owns a member group of this usage. The group contains persons that are able to approve user registration requests.
   *   * DisableInheritedUserRegistrationApproval - An organization that does not want user registration approvals owns a member group of this usage.
   *   * ResellerRegistrationApproval - An organization that wants reseller registration approvals owns a member group of this usage. The group contains persons that are able to approve reseller registration requests.
   *   * DisableInheritedResellerRegistrationApproval - An organization that does not want reseller registration approvals owns a member group of this usage.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsResponse(params: ApiService.GetRestAdminV2MemberGroupsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    if (params.usage != null) __params = __params.set('usage', params.usage.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>}>;
      })
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsParams` containing the following parameters:
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `usage`: The member group's usage. Available values:
   *   * GeneralPurpose - A general grouping of persons and/or organizations.
   *   * AccessControl - A group of persons specified as part of an access control policy.
   *   * CustomerTerritory - A group of customers, typically by territory.
   *   * CustomerServiceRepresentative - A group of customer service representatives, which in turn can have customer territory groups or customer accounts assigned to them.
   *   * RegisteredCustomer - A group of buyer organizations that have registered to a seller organization.
   *   * CustomerPrice - A group of customers that are entitled to get a contract's terms and conditions; often used to enforce custom pricing for the group. Customer price groups can comprise any user, who can be included and excluded explicitly.
   *   * CustomerSegment - A group of persons based on common attributes, for example demographics or purchase history. This group is used in marketing campaigns.
   *   * RFQResponseApproval - An organization that wants request for quote (RFQ) response approvals owns a member group of this usage. The group contains persons that are able to approve RFQ responses.
   *   * DisableInheritedRFQResponseApproval - An organization that does not want request for quote (RFQ) response approvals owns a member group of this usage.
   *   * OrderProcessApproval - An organization that wants order approvals owns a member group of this usage. The group contains persons that are able to approve orders.
   *   * DisableInheritedOrderProcessApproval - An organization that does not want order approvals owns a member group of this usage.
   *   * ContractSubmitApproval - An organization that wants contract approvals owns a member group of this usage. The group contains persons that are able to approve contracts.
   *   * DisableInheritedContractSubmitApproval - An organization that does not want contract approvals owns a member group of this usage.
   *   * UserRegistrationApproval - An organization that wants user registration approvals owns a member group of this usage. The group contains persons that are able to approve user registration requests.
   *   * DisableInheritedUserRegistrationApproval - An organization that does not want user registration approvals owns a member group of this usage.
   *   * ResellerRegistrationApproval - An organization that wants reseller registration approvals owns a member group of this usage. The group contains persons that are able to approve reseller registration requests.
   *   * DisableInheritedResellerRegistrationApproval - An organization that does not want reseller registration approvals owns a member group of this usage.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroups(params: ApiService.GetRestAdminV2MemberGroupsParams): __Observable<{count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>}> {
    return this.getRestAdminV2MemberGroupsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>})
    );
  }

  /**
   * @param params The `ApiService.PostRestAdminV2MemberGroupsParams` containing the following parameters:
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  postRestAdminV2MemberGroupsResponse(params: ApiService.PostRestAdminV2MemberGroupsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/member-groups`,
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
   * @param params The `ApiService.PostRestAdminV2MemberGroupsParams` containing the following parameters:
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  postRestAdminV2MemberGroups(params: ApiService.PostRestAdminV2MemberGroupsParams): __Observable<null> {
    return this.postRestAdminV2MemberGroupsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsByNameAndUsageParams` containing the following parameters:
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `usage`: The member group usage type.
   *
   * - `memberGroupName`: The member group name.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsByNameAndUsageResponse(params: ApiService.GetRestAdminV2MemberGroupsByNameAndUsageParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    if (params.usage != null) __params = __params.set('usage', params.usage.toString());
    if (params.memberGroupName != null) __params = __params.set('memberGroupName', params.memberGroupName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-groups/by-name-and-usage`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>}>;
      })
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsByNameAndUsageParams` containing the following parameters:
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `usage`: The member group usage type.
   *
   * - `memberGroupName`: The member group name.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsByNameAndUsage(params: ApiService.GetRestAdminV2MemberGroupsByNameAndUsageParams): __Observable<{count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>}> {
    return this.getRestAdminV2MemberGroupsByNameAndUsageResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>})
    );
  }

  /**
   * @param params The `ApiService.DeleteRestAdminV2MemberGroupsIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   */
  deleteRestAdminV2MemberGroupsIdResponse(params: ApiService.DeleteRestAdminV2MemberGroupsIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}`,
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
   * @param params The `ApiService.DeleteRestAdminV2MemberGroupsIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   */
  deleteRestAdminV2MemberGroupsId(params: ApiService.DeleteRestAdminV2MemberGroupsIdParams): __Observable<null> {
    return this.deleteRestAdminV2MemberGroupsIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdResponse(params: ApiService.GetRestAdminV2MemberGroupsIdParams): __Observable<__StrictHttpResponse<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}>;
      })
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsId(params: ApiService.GetRestAdminV2MemberGroupsIdParams): __Observable<{allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>}> {
    return this.getRestAdminV2MemberGroupsIdResponse(params).pipe(
      __map(_r => _r.body as {allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>})
    );
  }

  /**
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdResponse(params: ApiService.PatchRestAdminV2MemberGroupsIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}`,
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
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsId(params: ApiService.PatchRestAdminV2MemberGroupsIdParams): __Observable<null> {
    return this.patchRestAdminV2MemberGroupsIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.PostRestAdminV2MemberGroupsIdActivateParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   */
  postRestAdminV2MemberGroupsIdActivateResponse(params: ApiService.PostRestAdminV2MemberGroupsIdActivateParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/activate`,
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
   * @param params The `ApiService.PostRestAdminV2MemberGroupsIdActivateParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   */
  postRestAdminV2MemberGroupsIdActivate(params: ApiService.PostRestAdminV2MemberGroupsIdActivateParams): __Observable<null> {
    return this.postRestAdminV2MemberGroupsIdActivateResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdConditionElementsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdConditionElementsResponse(params: ApiService.GetRestAdminV2MemberGroupsIdConditionElementsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{id?: number, name?: string, nameValuePairVariable?: Array<{id?: string, name?: string, value?: string}>, negate?: boolean, parentElementName?: string, simpleConditionOperator?: string, simpleConditionValue?: string, simpleConditionVariable?: string, type?: 'andListCondition' | 'orListCondition' | 'simpleCondition' | 'trueCondition'}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/condition-elements`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{id?: number, name?: string, nameValuePairVariable?: Array<{id?: string, name?: string, value?: string}>, negate?: boolean, parentElementName?: string, simpleConditionOperator?: string, simpleConditionValue?: string, simpleConditionVariable?: string, type?: 'andListCondition' | 'orListCondition' | 'simpleCondition' | 'trueCondition'}>}>;
      })
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdConditionElementsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdConditionElements(params: ApiService.GetRestAdminV2MemberGroupsIdConditionElementsParams): __Observable<{count?: number, items?: Array<{id?: number, name?: string, nameValuePairVariable?: Array<{id?: string, name?: string, value?: string}>, negate?: boolean, parentElementName?: string, simpleConditionOperator?: string, simpleConditionValue?: string, simpleConditionVariable?: string, type?: 'andListCondition' | 'orListCondition' | 'simpleCondition' | 'trueCondition'}>}> {
    return this.getRestAdminV2MemberGroupsIdConditionElementsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{id?: number, name?: string, nameValuePairVariable?: Array<{id?: string, name?: string, value?: string}>, negate?: boolean, parentElementName?: string, simpleConditionOperator?: string, simpleConditionValue?: string, simpleConditionVariable?: string, type?: 'andListCondition' | 'orListCondition' | 'simpleCondition' | 'trueCondition'}>})
    );
  }

  /**
   * @param params The `ApiService.PostRestAdminV2MemberGroupsIdConditionElementsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  postRestAdminV2MemberGroupsIdConditionElementsResponse(params: ApiService.PostRestAdminV2MemberGroupsIdConditionElementsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/condition-elements`,
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
   * @param params The `ApiService.PostRestAdminV2MemberGroupsIdConditionElementsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  postRestAdminV2MemberGroupsIdConditionElements(params: ApiService.PostRestAdminV2MemberGroupsIdConditionElementsParams): __Observable<null> {
    return this.postRestAdminV2MemberGroupsIdConditionElementsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.DeleteRestAdminV2MemberGroupsIdConditionElementsElementIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `elementId`: The unique numeric ID for identifying the condition element.
   */
  deleteRestAdminV2MemberGroupsIdConditionElementsElementIdResponse(params: ApiService.DeleteRestAdminV2MemberGroupsIdConditionElementsElementIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/condition-elements/${params.elementId}`,
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
   * @param params The `ApiService.DeleteRestAdminV2MemberGroupsIdConditionElementsElementIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `elementId`: The unique numeric ID for identifying the condition element.
   */
  deleteRestAdminV2MemberGroupsIdConditionElementsElementId(params: ApiService.DeleteRestAdminV2MemberGroupsIdConditionElementsElementIdParams): __Observable<null> {
    return this.deleteRestAdminV2MemberGroupsIdConditionElementsElementIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdConditionElementsElementIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `elementId`: The unique numeric ID for identifying the condition element.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdConditionElementsElementIdResponse(params: ApiService.PatchRestAdminV2MemberGroupsIdConditionElementsElementIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/condition-elements/${params.elementId}`,
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
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdConditionElementsElementIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `elementId`: The unique numeric ID for identifying the condition element.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdConditionElementsElementId(params: ApiService.PatchRestAdminV2MemberGroupsIdConditionElementsElementIdParams): __Observable<null> {
    return this.patchRestAdminV2MemberGroupsIdConditionElementsElementIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdDescriptionsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `dataLanguageIds`: The integer(s) for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center. Multiple identifiers should be specified as a comma-separated list.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdDescriptionsResponse(params: ApiService.GetRestAdminV2MemberGroupsIdDescriptionsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{languageId?: number, longDescription?: string, shortDescription?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    if (params.dataLanguageIds != null) __params = __params.set('dataLanguageIds', params.dataLanguageIds.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/descriptions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{languageId?: number, longDescription?: string, shortDescription?: string}>}>;
      })
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdDescriptionsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `dataLanguageIds`: The integer(s) for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center. Multiple identifiers should be specified as a comma-separated list.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdDescriptions(params: ApiService.GetRestAdminV2MemberGroupsIdDescriptionsParams): __Observable<{count?: number, items?: Array<{languageId?: number, longDescription?: string, shortDescription?: string}>}> {
    return this.getRestAdminV2MemberGroupsIdDescriptionsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{languageId?: number, longDescription?: string, shortDescription?: string}>})
    );
  }

  /**
   * @param params The `ApiService.PostRestAdminV2MemberGroupsIdDescriptionsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  postRestAdminV2MemberGroupsIdDescriptionsResponse(params: ApiService.PostRestAdminV2MemberGroupsIdDescriptionsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/descriptions`,
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
   * @param params The `ApiService.PostRestAdminV2MemberGroupsIdDescriptionsParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  postRestAdminV2MemberGroupsIdDescriptions(params: ApiService.PostRestAdminV2MemberGroupsIdDescriptionsParams): __Observable<null> {
    return this.postRestAdminV2MemberGroupsIdDescriptionsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.DeleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   */
  deleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params: ApiService.DeleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/descriptions/${params.languageId}`,
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
   * @param params The `ApiService.DeleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   */
  deleteRestAdminV2MemberGroupsIdDescriptionsLanguageId(params: ApiService.DeleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<null> {
    return this.deleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params: ApiService.GetRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<__StrictHttpResponse<{languageId?: number, longDescription?: string, shortDescription?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/descriptions/${params.languageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{languageId?: number, longDescription?: string, shortDescription?: string}>;
      })
    );
  }

  /**
   * @param params The `ApiService.GetRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * @return The operation is successful.
   */
  getRestAdminV2MemberGroupsIdDescriptionsLanguageId(params: ApiService.GetRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<{languageId?: number, longDescription?: string, shortDescription?: string}> {
    return this.getRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params).pipe(
      __map(_r => _r.body as {languageId?: number, longDescription?: string, shortDescription?: string})
    );
  }

  /**
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params: ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/descriptions/${params.languageId}`,
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
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdDescriptionsLanguageId(params: ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<null> {
    return this.patchRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApiService {

  /**
   * Parameters for getRestAdminV2MemberGroups
   */
  export interface GetRestAdminV2MemberGroupsParams {

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The member group's usage. Available values:
     * * GeneralPurpose - A general grouping of persons and/or organizations.
     * * AccessControl - A group of persons specified as part of an access control policy.
     * * CustomerTerritory - A group of customers, typically by territory.
     * * CustomerServiceRepresentative - A group of customer service representatives, which in turn can have customer territory groups or customer accounts assigned to them.
     * * RegisteredCustomer - A group of buyer organizations that have registered to a seller organization.
     * * CustomerPrice - A group of customers that are entitled to get a contract's terms and conditions; often used to enforce custom pricing for the group. Customer price groups can comprise any user, who can be included and excluded explicitly.
     * * CustomerSegment - A group of persons based on common attributes, for example demographics or purchase history. This group is used in marketing campaigns.
     * * RFQResponseApproval - An organization that wants request for quote (RFQ) response approvals owns a member group of this usage. The group contains persons that are able to approve RFQ responses.
     * * DisableInheritedRFQResponseApproval - An organization that does not want request for quote (RFQ) response approvals owns a member group of this usage.
     * * OrderProcessApproval - An organization that wants order approvals owns a member group of this usage. The group contains persons that are able to approve orders.
     * * DisableInheritedOrderProcessApproval - An organization that does not want order approvals owns a member group of this usage.
     * * ContractSubmitApproval - An organization that wants contract approvals owns a member group of this usage. The group contains persons that are able to approve contracts.
     * * DisableInheritedContractSubmitApproval - An organization that does not want contract approvals owns a member group of this usage.
     * * UserRegistrationApproval - An organization that wants user registration approvals owns a member group of this usage. The group contains persons that are able to approve user registration requests.
     * * DisableInheritedUserRegistrationApproval - An organization that does not want user registration approvals owns a member group of this usage.
     * * ResellerRegistrationApproval - An organization that wants reseller registration approvals owns a member group of this usage. The group contains persons that are able to approve reseller registration requests.
     * * DisableInheritedResellerRegistrationApproval - An organization that does not want reseller registration approvals owns a member group of this usage.
     */
    usage: string;

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;
  }

  /**
   * Parameters for postRestAdminV2MemberGroups
   */
  export interface PostRestAdminV2MemberGroupsParams {

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The request body.
     */
    body: {allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>};
  }

  /**
   * Parameters for getRestAdminV2MemberGroupsByNameAndUsage
   */
  export interface GetRestAdminV2MemberGroupsByNameAndUsageParams {

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The member group usage type.
     */
    usage: string;

    /**
     * The member group name.
     */
    memberGroupName: 'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval';
  }

  /**
   * Parameters for deleteRestAdminV2MemberGroupsId
   */
  export interface DeleteRestAdminV2MemberGroupsIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;
  }

  /**
   * Parameters for getRestAdminV2MemberGroupsId
   */
  export interface GetRestAdminV2MemberGroupsIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;
  }

  /**
   * Parameters for patchRestAdminV2MemberGroupsId
   */
  export interface PatchRestAdminV2MemberGroupsIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The request body.
     */
    body: {allowExport?: boolean, exportAll?: boolean, id?: number, name?: string, ownerId?: string, storeId?: number, updatedBy?: string, updatedDateTime?: string, usage?: Array<'GeneralPurpose' | 'AccessControl' | 'CustomerTerritory' | 'CustomerServiceRepresentative' | 'RegisteredCustomer' | 'CustomerPrice' | 'CustomerSegment' | 'RFQResponseApproval' | 'DisableInheritedRFQResponseApproval' | 'OrderProcessApproval' | 'DisableInheritedOrderProcessApproval' | 'ContractSubmitApproval' | 'DisableInheritedContractSubmitApproval' | 'UserRegistrationApproval' | 'DisableInheritedUserRegistrationApproval' | 'ResellerRegistrationApproval' | 'DisableInheritedResellerRegistrationApproval'>};
  }

  /**
   * Parameters for postRestAdminV2MemberGroupsIdActivate
   */
  export interface PostRestAdminV2MemberGroupsIdActivateParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;
  }

  /**
   * Parameters for getRestAdminV2MemberGroupsIdConditionElements
   */
  export interface GetRestAdminV2MemberGroupsIdConditionElementsParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;
  }

  /**
   * Parameters for postRestAdminV2MemberGroupsIdConditionElements
   */
  export interface PostRestAdminV2MemberGroupsIdConditionElementsParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The request body.
     */
    body: {id?: number, name?: string, nameValuePairVariable?: Array<{id?: string, name?: string, value?: string}>, negate?: boolean, parentElementName?: string, simpleConditionOperator?: string, simpleConditionValue?: string, simpleConditionVariable?: string, type?: 'andListCondition' | 'orListCondition' | 'simpleCondition' | 'trueCondition'};
  }

  /**
   * Parameters for deleteRestAdminV2MemberGroupsIdConditionElementsElementId
   */
  export interface DeleteRestAdminV2MemberGroupsIdConditionElementsElementIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The unique numeric ID for identifying the condition element.
     */
    elementId: number;
  }

  /**
   * Parameters for patchRestAdminV2MemberGroupsIdConditionElementsElementId
   */
  export interface PatchRestAdminV2MemberGroupsIdConditionElementsElementIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The unique numeric ID for identifying the condition element.
     */
    elementId: number;

    /**
     * The request body.
     */
    body: {id?: number, name?: string, nameValuePairVariable?: Array<{id?: string, name?: string, value?: string}>, negate?: boolean, parentElementName?: string, simpleConditionOperator?: string, simpleConditionValue?: string, simpleConditionVariable?: string, type?: 'andListCondition' | 'orListCondition' | 'simpleCondition' | 'trueCondition'};
  }

  /**
   * Parameters for getRestAdminV2MemberGroupsIdDescriptions
   */
  export interface GetRestAdminV2MemberGroupsIdDescriptionsParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The integer(s) for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center. Multiple identifiers should be specified as a comma-separated list.
     */
    dataLanguageIds: string;
  }

  /**
   * Parameters for postRestAdminV2MemberGroupsIdDescriptions
   */
  export interface PostRestAdminV2MemberGroupsIdDescriptionsParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The request body.
     */
    body: {languageId?: number, longDescription?: string, shortDescription?: string};
  }

  /**
   * Parameters for deleteRestAdminV2MemberGroupsIdDescriptionsLanguageId
   */
  export interface DeleteRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    languageId: number;
  }

  /**
   * Parameters for getRestAdminV2MemberGroupsIdDescriptionsLanguageId
   */
  export interface GetRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    languageId: number;
  }

  /**
   * Parameters for patchRestAdminV2MemberGroupsIdDescriptionsLanguageId
   */
  export interface PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    languageId: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The request body.
     */
    body: {languageId?: number, longDescription?: string, shortDescription?: string};
  }
}

export { ApiService }
