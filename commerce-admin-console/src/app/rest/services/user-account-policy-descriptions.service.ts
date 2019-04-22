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
class UserAccountPolicyDescriptionsService extends __BaseService {
  static readonly getUserAccountPolicyDescriptionsPath = '/rest/admin/v2/user-account-policy-descriptions';
  static readonly createUserAccountPolicyDescriptionPath = '/rest/admin/v2/user-account-policy-descriptions';
  static readonly getUserAccountPolicyDescriptionByIdPath = '/rest/admin/v2/user-account-policy-descriptions/userAccountPolicyId:{userAccountPolicyId},languageId:{languageId}';
  static readonly deleteUserAccountPolicyDescriptionByIdPath = '/rest/admin/v2/user-account-policy-descriptions/userAccountPolicyId:{userAccountPolicyId},languageId:{languageId}';
  static readonly updateUserAccountPolicyDescriptionByIdPath = '/rest/admin/v2/user-account-policy-descriptions/userAccountPolicyId:{userAccountPolicyId},languageId:{languageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of user account policy descriptions.
   * @param params The `UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionsParams` containing the following parameters:
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `description`: The description of the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
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
  getUserAccountPolicyDescriptionsResponse(params: UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.userAccountPolicyId != null) __params = __params.set('userAccountPolicyId', params.userAccountPolicyId.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.languageId != null) __params = __params.set('languageId', params.languageId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/user-account-policy-descriptions`,
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
   * Get a collection of user account policy descriptions.
   * @param params The `UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionsParams` containing the following parameters:
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `description`: The description of the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
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
  getUserAccountPolicyDescriptions(params: UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionsParams): __Observable<{count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>}> {
    return this.getUserAccountPolicyDescriptionsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{userAccountPolicyId?: number, description?: string, languageId?: number}>})
    );
  }

  /**
   * Create a description for a user account policy.
   * @param UserAccountPolicyDescription The description of a user account policy.
   */
  createUserAccountPolicyDescriptionResponse(UserAccountPolicyDescription: {userAccountPolicyId?: number, description?: string, languageId?: number}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = UserAccountPolicyDescription;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/user-account-policy-descriptions`,
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
   * Create a description for a user account policy.
   * @param UserAccountPolicyDescription The description of a user account policy.
   */
  createUserAccountPolicyDescription(UserAccountPolicyDescription: {userAccountPolicyId?: number, description?: string, languageId?: number}): __Observable<null> {
    return this.createUserAccountPolicyDescriptionResponse(UserAccountPolicyDescription).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a description for a user account policy.
   * @param params The `UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionByIdParams` containing the following parameters:
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The description of a user account policy.
   */
  getUserAccountPolicyDescriptionByIdResponse(params: UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionByIdParams): __Observable<__StrictHttpResponse<{userAccountPolicyId?: number, description?: string, languageId?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/user-account-policy-descriptions/userAccountPolicyId:${params.userAccountPolicyId},languageId:${params.languageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{userAccountPolicyId?: number, description?: string, languageId?: number}>;
      })
    );
  }

  /**
   * Get a description for a user account policy.
   * @param params The `UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionByIdParams` containing the following parameters:
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The description of a user account policy.
   */
  getUserAccountPolicyDescriptionById(params: UserAccountPolicyDescriptionsService.GetUserAccountPolicyDescriptionByIdParams): __Observable<{userAccountPolicyId?: number, description?: string, languageId?: number}> {
    return this.getUserAccountPolicyDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as {userAccountPolicyId?: number, description?: string, languageId?: number})
    );
  }

  /**
   * Delete a description for a user account policy.
   * @param params The `UserAccountPolicyDescriptionsService.DeleteUserAccountPolicyDescriptionByIdParams` containing the following parameters:
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
   */
  deleteUserAccountPolicyDescriptionByIdResponse(params: UserAccountPolicyDescriptionsService.DeleteUserAccountPolicyDescriptionByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/user-account-policy-descriptions/userAccountPolicyId:${params.userAccountPolicyId},languageId:${params.languageId}`,
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
   * Delete a description for a user account policy.
   * @param params The `UserAccountPolicyDescriptionsService.DeleteUserAccountPolicyDescriptionByIdParams` containing the following parameters:
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
   */
  deleteUserAccountPolicyDescriptionById(params: UserAccountPolicyDescriptionsService.DeleteUserAccountPolicyDescriptionByIdParams): __Observable<null> {
    return this.deleteUserAccountPolicyDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update a description for a user account policy.
   * @param params The `UserAccountPolicyDescriptionsService.UpdateUserAccountPolicyDescriptionByIdParams` containing the following parameters:
   *
   * - `UserAccountPolicyDescription`: The description of a user account policy.
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
   */
  updateUserAccountPolicyDescriptionByIdResponse(params: UserAccountPolicyDescriptionsService.UpdateUserAccountPolicyDescriptionByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.UserAccountPolicyDescription;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/user-account-policy-descriptions/userAccountPolicyId:${params.userAccountPolicyId},languageId:${params.languageId}`,
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
   * Update a description for a user account policy.
   * @param params The `UserAccountPolicyDescriptionsService.UpdateUserAccountPolicyDescriptionByIdParams` containing the following parameters:
   *
   * - `UserAccountPolicyDescription`: The description of a user account policy.
   *
   * - `userAccountPolicyId`: The unique numeric ID for identifying the user account policy.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
   */
  updateUserAccountPolicyDescriptionById(params: UserAccountPolicyDescriptionsService.UpdateUserAccountPolicyDescriptionByIdParams): __Observable<null> {
    return this.updateUserAccountPolicyDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserAccountPolicyDescriptionsService {

  /**
   * Parameters for getUserAccountPolicyDescriptions
   */
  export interface GetUserAccountPolicyDescriptionsParams {

    /**
     * The unique numeric ID for identifying the user account policy.
     */
    userAccountPolicyId?: number;

    /**
     * The description of the user account policy.
     */
    description?: string;

    /**
     * The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
     */
    languageId?: number;

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
   * Parameters for getUserAccountPolicyDescriptionById
   */
  export interface GetUserAccountPolicyDescriptionByIdParams {

    /**
     * The unique numeric ID for identifying the user account policy.
     */
    userAccountPolicyId: number;

    /**
     * The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
     */
    languageId: number;

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
   * Parameters for deleteUserAccountPolicyDescriptionById
   */
  export interface DeleteUserAccountPolicyDescriptionByIdParams {

    /**
     * The unique numeric ID for identifying the user account policy.
     */
    userAccountPolicyId: number;

    /**
     * The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
     */
    languageId: number;
  }

  /**
   * Parameters for updateUserAccountPolicyDescriptionById
   */
  export interface UpdateUserAccountPolicyDescriptionByIdParams {

    /**
     * The description of a user account policy.
     */
    UserAccountPolicyDescription: {userAccountPolicyId?: number, description?: string, languageId?: number};

    /**
     * The unique numeric ID for identifying the user account policy.
     */
    userAccountPolicyId: number;

    /**
     * The language of the description. For a list of integer language identifiers, please refer to the Knowledge Center.
     */
    languageId: number;
  }
}

export { UserAccountPolicyDescriptionsService }
