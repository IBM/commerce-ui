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
class UserAccountPoliciesService extends __BaseService {
  static readonly getUserAccountPoliciesPath = '/rest/admin/v2/user-account-policies';
  static readonly createUserAccountPolicyPath = '/rest/admin/v2/user-account-policies';
  static readonly getUserAccountPolicyByIdPath = '/rest/admin/v2/user-account-policies/{id}';
  static readonly deleteUserAccountPolicyByIdPath = '/rest/admin/v2/user-account-policies/{id}';
  static readonly updateUserAccountPolicyByIdPath = '/rest/admin/v2/user-account-policies/{id}';
  static readonly getDescriptionsOfUserAccountPolicyPath = '/rest/admin/v2/user-account-policies/{id}/descriptions';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of user account policy records.
   * @param params The `UserAccountPoliciesService.GetUserAccountPoliciesParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
   *
   * - `userAccountLockoutPolicyId`: The unique numeric ID for identifying a user account lockout policy.
   *
   * - `passwordPolicyId`: The unique numeric ID for identifying a password policy.
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
   * @return A collection of user account policies records.
   */
  getUserAccountPoliciesResponse(params: UserAccountPoliciesService.GetUserAccountPoliciesParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.userAccountLockoutPolicyId != null) __params = __params.set('userAccountLockoutPolicyId', params.userAccountLockoutPolicyId.toString());
    if (params.passwordPolicyId != null) __params = __params.set('passwordPolicyId', params.passwordPolicyId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/user-account-policies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}>}>;
      })
    );
  }

  /**
   * Get a collection of user account policy records.
   * @param params The `UserAccountPoliciesService.GetUserAccountPoliciesParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
   *
   * - `userAccountLockoutPolicyId`: The unique numeric ID for identifying a user account lockout policy.
   *
   * - `passwordPolicyId`: The unique numeric ID for identifying a password policy.
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
   * @return A collection of user account policies records.
   */
  getUserAccountPolicies(params: UserAccountPoliciesService.GetUserAccountPoliciesParams): __Observable<{count?: number, items?: Array<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}>}> {
    return this.getUserAccountPoliciesResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}>})
    );
  }

  /**
   * Create a user account policy record.
   * @param UserAccountPolicy The user account policy.
   */
  createUserAccountPolicyResponse(UserAccountPolicy: {id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = UserAccountPolicy;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/user-account-policies`,
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
   * Create a user account policy record.
   * @param UserAccountPolicy The user account policy.
   */
  createUserAccountPolicy(UserAccountPolicy: {id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}): __Observable<null> {
    return this.createUserAccountPolicyResponse(UserAccountPolicy).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a user account policy record.
   * @param params The `UserAccountPoliciesService.GetUserAccountPolicyByIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The user account policy.
   */
  getUserAccountPolicyByIdResponse(params: UserAccountPoliciesService.GetUserAccountPolicyByIdParams): __Observable<__StrictHttpResponse<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/user-account-policies/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}>;
      })
    );
  }

  /**
   * Get a user account policy record.
   * @param params The `UserAccountPoliciesService.GetUserAccountPolicyByIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The user account policy.
   */
  getUserAccountPolicyById(params: UserAccountPoliciesService.GetUserAccountPolicyByIdParams): __Observable<{id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}}> {
    return this.getUserAccountPolicyByIdResponse(params).pipe(
      __map(_r => _r.body as {id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}})
    );
  }

  /**
   * Delete a user account policy record.
   * @param id The unique numeric ID for identifying a user account policy.
   */
  deleteUserAccountPolicyByIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/user-account-policies/${id}`,
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
   * Delete a user account policy record.
   * @param id The unique numeric ID for identifying a user account policy.
   */
  deleteUserAccountPolicyById(id: number): __Observable<null> {
    return this.deleteUserAccountPolicyByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update a user account policy record.
   * @param params The `UserAccountPoliciesService.UpdateUserAccountPolicyByIdParams` containing the following parameters:
   *
   * - `UserAccountPolicy`: The user account policy.
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
   */
  updateUserAccountPolicyByIdResponse(params: UserAccountPoliciesService.UpdateUserAccountPolicyByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.UserAccountPolicy;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/user-account-policies/${params.id}`,
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
   * Update a user account policy record.
   * @param params The `UserAccountPoliciesService.UpdateUserAccountPolicyByIdParams` containing the following parameters:
   *
   * - `UserAccountPolicy`: The user account policy.
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
   */
  updateUserAccountPolicyById(params: UserAccountPoliciesService.UpdateUserAccountPolicyByIdParams): __Observable<null> {
    return this.updateUserAccountPolicyByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `UserAccountPoliciesService.GetDescriptionsOfUserAccountPolicyParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
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
   * @return A collection of user account policy descriptions.
   */
  getDescriptionsOfUserAccountPolicyResponse(params: UserAccountPoliciesService.GetDescriptionsOfUserAccountPolicyParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/user-account-policies/${params.id}/descriptions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>}>;
      })
    );
  }

  /**
   * @param params The `UserAccountPoliciesService.GetDescriptionsOfUserAccountPolicyParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying a user account policy.
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
   * @return A collection of user account policy descriptions.
   */
  getDescriptionsOfUserAccountPolicy(params: UserAccountPoliciesService.GetDescriptionsOfUserAccountPolicyParams): __Observable<{count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>}> {
    return this.getDescriptionsOfUserAccountPolicyResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>})
    );
  }
}

module UserAccountPoliciesService {

  /**
   * Parameters for getUserAccountPolicies
   */
  export interface GetUserAccountPoliciesParams {

    /**
     * The unique numeric ID for identifying a user account policy.
     */
    id?: number;

    /**
     * The unique numeric ID for identifying a user account lockout policy.
     */
    userAccountLockoutPolicyId?: number;

    /**
     * The unique numeric ID for identifying a password policy.
     */
    passwordPolicyId?: number;

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
   * Parameters for getUserAccountPolicyById
   */
  export interface GetUserAccountPolicyByIdParams {

    /**
     * The unique numeric ID for identifying a user account policy.
     */
    id: number;

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
   * Parameters for updateUserAccountPolicyById
   */
  export interface UpdateUserAccountPolicyByIdParams {

    /**
     * The user account policy.
     */
    UserAccountPolicy: {id?: number, userAccountLockoutPolicyId?: number, passwordPolicyId?: number, links?: {descriptions?: {href?: string}}};

    /**
     * The unique numeric ID for identifying a user account policy.
     */
    id: number;
  }

  /**
   * Parameters for getDescriptionsOfUserAccountPolicy
   */
  export interface GetDescriptionsOfUserAccountPolicyParams {

    /**
     * The unique numeric ID for identifying a user account policy.
     */
    id: number;

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
}

export { UserAccountPoliciesService }
