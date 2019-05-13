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
class RoleDescriptionsService extends __BaseService {
  static readonly getRoleDescriptionsPath = '/rest/admin/v2/role-descriptions';
  static readonly createRoleDescriptionPath = '/rest/admin/v2/role-descriptions';
  static readonly getRoleDescriptionByIdPath = '/rest/admin/v2/role-descriptions/roleId:{roleId},languageId:{languageId}';
  static readonly deleteRoleDescriptionByIdPath = '/rest/admin/v2/role-descriptions/roleId:{roleId},languageId:{languageId}';
  static readonly updateRoleDescriptionByIdPath = '/rest/admin/v2/role-descriptions/roleId:{roleId},languageId:{languageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of role descriptions.
   * @param params The `RoleDescriptionsService.GetRoleDescriptionsParams` containing the following parameters:
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   *
   * - `displayName`: The name of the role.
   *
   * - `description`: The description of the role.
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
   * @return A collection of role descriptions.
   */
  getRoleDescriptionsResponse(params: RoleDescriptionsService.GetRoleDescriptionsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.roleId != null) __params = __params.set('roleId', params.roleId.toString());
    if (params.languageId != null) __params = __params.set('languageId', params.languageId.toString());
    if (params.displayName != null) __params = __params.set('displayName', params.displayName.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/role-descriptions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>}>;
      })
    );
  }

  /**
   * Get a collection of role descriptions.
   * @param params The `RoleDescriptionsService.GetRoleDescriptionsParams` containing the following parameters:
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   *
   * - `displayName`: The name of the role.
   *
   * - `description`: The description of the role.
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
   * @return A collection of role descriptions.
   */
  getRoleDescriptions(params: RoleDescriptionsService.GetRoleDescriptionsParams): __Observable<{count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>}> {
    return this.getRoleDescriptionsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>})
    );
  }

  /**
   * Create a role description.
   * @param RoleDescription The role description.
   */
  createRoleDescriptionResponse(RoleDescription: {roleId?: number, languageId?: number, displayName?: string, description?: string}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = RoleDescription;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/role-descriptions`,
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
   * Create a role description.
   * @param RoleDescription The role description.
   */
  createRoleDescription(RoleDescription: {roleId?: number, languageId?: number, displayName?: string, description?: string}): __Observable<null> {
    return this.createRoleDescriptionResponse(RoleDescription).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a role description.
   * @param params The `RoleDescriptionsService.GetRoleDescriptionByIdParams` containing the following parameters:
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The role description.
   */
  getRoleDescriptionByIdResponse(params: RoleDescriptionsService.GetRoleDescriptionByIdParams): __Observable<__StrictHttpResponse<{roleId?: number, languageId?: number, displayName?: string, description?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/role-descriptions/roleId:${params.roleId},languageId:${params.languageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{roleId?: number, languageId?: number, displayName?: string, description?: string}>;
      })
    );
  }

  /**
   * Get a role description.
   * @param params The `RoleDescriptionsService.GetRoleDescriptionByIdParams` containing the following parameters:
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The role description.
   */
  getRoleDescriptionById(params: RoleDescriptionsService.GetRoleDescriptionByIdParams): __Observable<{roleId?: number, languageId?: number, displayName?: string, description?: string}> {
    return this.getRoleDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as {roleId?: number, languageId?: number, displayName?: string, description?: string})
    );
  }

  /**
   * Delete a role description.
   * @param params The `RoleDescriptionsService.DeleteRoleDescriptionByIdParams` containing the following parameters:
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   */
  deleteRoleDescriptionByIdResponse(params: RoleDescriptionsService.DeleteRoleDescriptionByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/role-descriptions/roleId:${params.roleId},languageId:${params.languageId}`,
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
   * Delete a role description.
   * @param params The `RoleDescriptionsService.DeleteRoleDescriptionByIdParams` containing the following parameters:
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   */
  deleteRoleDescriptionById(params: RoleDescriptionsService.DeleteRoleDescriptionByIdParams): __Observable<null> {
    return this.deleteRoleDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update a role description.
   * @param params The `RoleDescriptionsService.UpdateRoleDescriptionByIdParams` containing the following parameters:
   *
   * - `RoleDescription`: The role description.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   */
  updateRoleDescriptionByIdResponse(params: RoleDescriptionsService.UpdateRoleDescriptionByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.RoleDescription;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/role-descriptions/roleId:${params.roleId},languageId:${params.languageId}`,
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
   * Update a role description.
   * @param params The `RoleDescriptionsService.UpdateRoleDescriptionByIdParams` containing the following parameters:
   *
   * - `RoleDescription`: The role description.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `languageId`: The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
   */
  updateRoleDescriptionById(params: RoleDescriptionsService.UpdateRoleDescriptionByIdParams): __Observable<null> {
    return this.updateRoleDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RoleDescriptionsService {

  /**
   * Parameters for getRoleDescriptions
   */
  export interface GetRoleDescriptionsParams {

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId?: number;

    /**
     * The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
     */
    languageId?: number;

    /**
     * The name of the role.
     */
    displayName?: string;

    /**
     * The description of the role.
     */
    description?: string;

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
   * Parameters for getRoleDescriptionById
   */
  export interface GetRoleDescriptionByIdParams {

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId: number;

    /**
     * The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
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
   * Parameters for deleteRoleDescriptionById
   */
  export interface DeleteRoleDescriptionByIdParams {

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId: number;

    /**
     * The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
     */
    languageId: number;
  }

  /**
   * Parameters for updateRoleDescriptionById
   */
  export interface UpdateRoleDescriptionByIdParams {

    /**
     * The role description.
     */
    RoleDescription: {roleId?: number, languageId?: number, displayName?: string, description?: string};

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId: number;

    /**
     * The language of the description. For a list of integer language identifiers, refer to the Knowledge Center.
     */
    languageId: number;
  }
}

export { RoleDescriptionsService }
