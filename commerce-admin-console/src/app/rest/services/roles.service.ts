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
class RolesService extends __BaseService {
  static readonly getRolesPath = '/rest/admin/v2/roles';
  static readonly createRolePath = '/rest/admin/v2/roles';
  static readonly getRoleByIdPath = '/rest/admin/v2/roles/{id}';
  static readonly deleteRoleByIdPath = '/rest/admin/v2/roles/{id}';
  static readonly updateRoleByIdPath = '/rest/admin/v2/roles/{id}';
  static readonly getRoleDescriptionsOfRolePath = '/rest/admin/v2/roles/{id}/role-descriptions';
  static readonly getAssignableRolesPath = '/rest/admin/v2/roles/assignable';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of roles.
   * @param params The `RolesService.GetRolesParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the role.
   *
   * - `name`: The name of the role.
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
   * @return A collection of roles.
   */
  getRolesResponse(params: RolesService.GetRolesParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/roles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>}>;
      })
    );
  }

  /**
   * Get a collection of roles.
   * @param params The `RolesService.GetRolesParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the role.
   *
   * - `name`: The name of the role.
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
   * @return A collection of roles.
   */
  getRoles(params: RolesService.GetRolesParams): __Observable<{count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>}> {
    return this.getRolesResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>})
    );
  }

  /**
   * Create a role.
   * @param Role The role.
   */
  createRoleResponse(Role: {id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Role;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/roles`,
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
   * Create a role.
   * @param Role The role.
   */
  createRole(Role: {id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}): __Observable<null> {
    return this.createRoleResponse(Role).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a role.
   * @param params The `RolesService.GetRoleByIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the role.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The role.
   */
  getRoleByIdResponse(params: RolesService.GetRoleByIdParams): __Observable<__StrictHttpResponse<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/roles/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>;
      })
    );
  }

  /**
   * Get a role.
   * @param params The `RolesService.GetRoleByIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the role.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The role.
   */
  getRoleById(params: RolesService.GetRoleByIdParams): __Observable<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}> {
    return this.getRoleByIdResponse(params).pipe(
      __map(_r => _r.body as {id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}})
    );
  }

  /**
   * Delete a role.
   * @param id The unique numeric ID for identifying the role.
   */
  deleteRoleByIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/roles/${id}`,
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
   * Delete a role.
   * @param id The unique numeric ID for identifying the role.
   */
  deleteRoleById(id: number): __Observable<null> {
    return this.deleteRoleByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update a role.
   * @param params The `RolesService.UpdateRoleByIdParams` containing the following parameters:
   *
   * - `Role`: The role.
   *
   * - `id`: The unique numeric ID for identifying the role.
   */
  updateRoleByIdResponse(params: RolesService.UpdateRoleByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.Role;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/roles/${params.id}`,
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
   * Update a role.
   * @param params The `RolesService.UpdateRoleByIdParams` containing the following parameters:
   *
   * - `Role`: The role.
   *
   * - `id`: The unique numeric ID for identifying the role.
   */
  updateRoleById(params: RolesService.UpdateRoleByIdParams): __Observable<null> {
    return this.updateRoleByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the role descriptions for a role.
   * @param params The `RolesService.GetRoleDescriptionsOfRoleParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the role.
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
  getRoleDescriptionsOfRoleResponse(params: RolesService.GetRoleDescriptionsOfRoleParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>}>> {
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
      this.rootUrl + `/rest/admin/v2/roles/${params.id}/role-descriptions`,
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
   * Get the role descriptions for a role.
   * @param params The `RolesService.GetRoleDescriptionsOfRoleParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the role.
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
  getRoleDescriptionsOfRole(params: RolesService.GetRoleDescriptionsOfRoleParams): __Observable<{count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>}> {
    return this.getRoleDescriptionsOfRoleResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{roleId?: number, languageId?: number, displayName?: string, description?: string}>})
    );
  }

  /**
   * Gets the roles that the current user can assign in the specified organization.
   * @param params The `RolesService.GetAssignableRolesParams` containing the following parameters:
   *
   * - `organizationId`: The unique numeric ID for identifying the organization.
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
   * @return A collection of roles.
   */
  getAssignableRolesResponse(params: RolesService.GetAssignableRolesParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.organizationId != null) __params = __params.set('organizationId', params.organizationId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/roles/assignable`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>}>;
      })
    );
  }

  /**
   * Gets the roles that the current user can assign in the specified organization.
   * @param params The `RolesService.GetAssignableRolesParams` containing the following parameters:
   *
   * - `organizationId`: The unique numeric ID for identifying the organization.
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
   * @return A collection of roles.
   */
  getAssignableRoles(params: RolesService.GetAssignableRolesParams): __Observable<{count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>}> {
    return this.getAssignableRolesResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}}>})
    );
  }
}

module RolesService {

  /**
   * Parameters for getRoles
   */
  export interface GetRolesParams {

    /**
     * The unique numeric ID for identifying the role.
     */
    id?: number;

    /**
     * The name of the role.
     */
    name?: string;

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
   * Parameters for getRoleById
   */
  export interface GetRoleByIdParams {

    /**
     * The unique numeric ID for identifying the role.
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
   * Parameters for updateRoleById
   */
  export interface UpdateRoleByIdParams {

    /**
     * The role.
     */
    Role: {id?: number, name?: string, description?: string, links?: {descriptions?: {href?: string}}};

    /**
     * The unique numeric ID for identifying the role.
     */
    id: number;
  }

  /**
   * Parameters for getRoleDescriptionsOfRole
   */
  export interface GetRoleDescriptionsOfRoleParams {

    /**
     * The unique numeric ID for identifying the role.
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

  /**
   * Parameters for getAssignableRoles
   */
  export interface GetAssignableRolesParams {

    /**
     * The unique numeric ID for identifying the organization.
     */
    organizationId: number;

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

export { RolesService }
