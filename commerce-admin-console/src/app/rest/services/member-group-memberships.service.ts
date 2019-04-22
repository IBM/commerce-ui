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
class MemberGroupMembershipsService extends __BaseService {
  static readonly getMemberGroupMembershipsPath = '/rest/admin/v2/member-group-memberships';
  static readonly createMemberGroupMembershipPath = '/rest/admin/v2/member-group-memberships';
  static readonly getMemberGroupMembershipByIdPath = '/rest/admin/v2/member-group-memberships/memberId:{memberId},memberGroupId:{memberGroupId}';
  static readonly deleteMemberGroupMembershipByIdPath = '/rest/admin/v2/member-group-memberships/memberId:{memberId},memberGroupId:{memberGroupId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of member group memberships.
   * @param params The `MemberGroupMembershipsService.GetMemberGroupMembershipsParams` containing the following parameters:
   *
   * - `memberId`: The user ID or organization ID that is associated to the member group.
   *
   * - `memberGroupId`: The member group ID.
   *
   * - `field1`: The customizable field.
   *
   * - `exclude`: The member excluded indicator that specifies if the member (user or organization) is to be explicitly included or excluded from the member group. Valid values are 1 to exclude the member from the member group, and 0 to include the member in the member group. A member can belong to a member group implicitly by the conditions of the member group. When evaluating if a member belongs to a member group, explicit exclusion takes precedence, then explicit inclusion, and then finally implicit inclusion.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return A collection of member group memberships.
   */
  getMemberGroupMembershipsResponse(params: MemberGroupMembershipsService.GetMemberGroupMembershipsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.memberId != null) __params = __params.set('memberId', params.memberId.toString());
    if (params.memberGroupId != null) __params = __params.set('memberGroupId', params.memberGroupId.toString());
    if (params.field1 != null) __params = __params.set('field1', params.field1.toString());
    if (params.exclude != null) __params = __params.set('exclude', params.exclude.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-group-memberships`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}>}>;
      })
    );
  }

  /**
   * Get a collection of member group memberships.
   * @param params The `MemberGroupMembershipsService.GetMemberGroupMembershipsParams` containing the following parameters:
   *
   * - `memberId`: The user ID or organization ID that is associated to the member group.
   *
   * - `memberGroupId`: The member group ID.
   *
   * - `field1`: The customizable field.
   *
   * - `exclude`: The member excluded indicator that specifies if the member (user or organization) is to be explicitly included or excluded from the member group. Valid values are 1 to exclude the member from the member group, and 0 to include the member in the member group. A member can belong to a member group implicitly by the conditions of the member group. When evaluating if a member belongs to a member group, explicit exclusion takes precedence, then explicit inclusion, and then finally implicit inclusion.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return A collection of member group memberships.
   */
  getMemberGroupMemberships(params: MemberGroupMembershipsService.GetMemberGroupMembershipsParams): __Observable<{count?: number, items?: Array<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}>}> {
    return this.getMemberGroupMembershipsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}>})
    );
  }

  /**
   * Create a member group membership.
   * @param MemberGroupMembership A member group membership, which is an association of a member (user or organization) to a member group.
   */
  createMemberGroupMembershipResponse(MemberGroupMembership: {memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = MemberGroupMembership;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/member-group-memberships`,
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
   * Create a member group membership.
   * @param MemberGroupMembership A member group membership, which is an association of a member (user or organization) to a member group.
   */
  createMemberGroupMembership(MemberGroupMembership: {memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}): __Observable<null> {
    return this.createMemberGroupMembershipResponse(MemberGroupMembership).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a member group membership.
   * @param params The `MemberGroupMembershipsService.GetMemberGroupMembershipByIdParams` containing the following parameters:
   *
   * - `memberId`: The user ID or organization ID that is associated to the member group.
   *
   * - `memberGroupId`: The member group ID.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return A member group membership, which is an association of a member (user or organization) to a member group.
   */
  getMemberGroupMembershipByIdResponse(params: MemberGroupMembershipsService.GetMemberGroupMembershipByIdParams): __Observable<__StrictHttpResponse<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/member-group-memberships/memberId:${params.memberId},memberGroupId:${params.memberGroupId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}>;
      })
    );
  }

  /**
   * Get a member group membership.
   * @param params The `MemberGroupMembershipsService.GetMemberGroupMembershipByIdParams` containing the following parameters:
   *
   * - `memberId`: The user ID or organization ID that is associated to the member group.
   *
   * - `memberGroupId`: The member group ID.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return A member group membership, which is an association of a member (user or organization) to a member group.
   */
  getMemberGroupMembershipById(params: MemberGroupMembershipsService.GetMemberGroupMembershipByIdParams): __Observable<{memberId?: number, memberGroupId?: number, field1?: string, exclude?: string}> {
    return this.getMemberGroupMembershipByIdResponse(params).pipe(
      __map(_r => _r.body as {memberId?: number, memberGroupId?: number, field1?: string, exclude?: string})
    );
  }

  /**
   * Delete a member group membership.
   * @param params The `MemberGroupMembershipsService.DeleteMemberGroupMembershipByIdParams` containing the following parameters:
   *
   * - `memberId`: The user ID or organization ID that is associated to the member group.
   *
   * - `memberGroupId`: The member group ID.
   */
  deleteMemberGroupMembershipByIdResponse(params: MemberGroupMembershipsService.DeleteMemberGroupMembershipByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/member-group-memberships/memberId:${params.memberId},memberGroupId:${params.memberGroupId}`,
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
   * Delete a member group membership.
   * @param params The `MemberGroupMembershipsService.DeleteMemberGroupMembershipByIdParams` containing the following parameters:
   *
   * - `memberId`: The user ID or organization ID that is associated to the member group.
   *
   * - `memberGroupId`: The member group ID.
   */
  deleteMemberGroupMembershipById(params: MemberGroupMembershipsService.DeleteMemberGroupMembershipByIdParams): __Observable<null> {
    return this.deleteMemberGroupMembershipByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MemberGroupMembershipsService {

  /**
   * Parameters for getMemberGroupMemberships
   */
  export interface GetMemberGroupMembershipsParams {

    /**
     * The user ID or organization ID that is associated to the member group.
     */
    memberId?: number;

    /**
     * The member group ID.
     */
    memberGroupId?: number;

    /**
     * The customizable field.
     */
    field1?: string;

    /**
     * The member excluded indicator that specifies if the member (user or organization) is to be explicitly included or excluded from the member group. Valid values are 1 to exclude the member from the member group, and 0 to include the member in the member group. A member can belong to a member group implicitly by the conditions of the member group. When evaluating if a member belongs to a member group, explicit exclusion takes precedence, then explicit inclusion, and then finally implicit inclusion.
     */
    exclude?: string;

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: string;

    /**
     * The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
     */
    expand?: string;

    /**
     * The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for getMemberGroupMembershipById
   */
  export interface GetMemberGroupMembershipByIdParams {

    /**
     * The user ID or organization ID that is associated to the member group.
     */
    memberId: number;

    /**
     * The member group ID.
     */
    memberGroupId: number;

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: string;

    /**
     * The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
     */
    expand?: string;

    /**
     * The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for deleteMemberGroupMembershipById
   */
  export interface DeleteMemberGroupMembershipByIdParams {

    /**
     * The user ID or organization ID that is associated to the member group.
     */
    memberId: number;

    /**
     * The member group ID.
     */
    memberGroupId: number;
  }
}

export { MemberGroupMembershipsService }
