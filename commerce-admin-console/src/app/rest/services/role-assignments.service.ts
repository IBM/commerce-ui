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
class RoleAssignmentsService extends __BaseService {
  static readonly getRoleAssignmentsPath = '/rest/admin/v2/role-assignments';
  static readonly RoleAssignmentCreateRoleAssignmentPath = '/rest/admin/v2/role-assignments';
  static readonly getRoleAssignmentByIdPath = '/rest/admin/v2/role-assignments/memberId:{memberId},roleId:{roleId},organizationId:{organizationId}';
  static readonly RoleAssignmentDeleteRoleAssignmentPath = '/rest/admin/v2/role-assignments/memberId:{memberId},roleId:{roleId},organizationId:{organizationId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of role assignments.
   * @param params The `RoleAssignmentsService.GetRoleAssignmentsParams` containing the following parameters:
   *
   * - `memberId`: The unique numeric ID for identifying the user or organization of the member that has a role.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `organizationId`: The unique numeric ID for identifying the organization where the role is being played.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * @return A collection of role assignments.
   */
  getRoleAssignmentsResponse(params: RoleAssignmentsService.GetRoleAssignmentsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<any>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.memberId != null) __params = __params.set('memberId', params.memberId.toString());
    if (params.roleId != null) __params = __params.set('roleId', params.roleId.toString());
    if (params.organizationId != null) __params = __params.set('organizationId', params.organizationId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/role-assignments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<any>}>;
      })
    );
  }

  /**
   * Get a collection of role assignments.
   * @param params The `RoleAssignmentsService.GetRoleAssignmentsParams` containing the following parameters:
   *
   * - `memberId`: The unique numeric ID for identifying the user or organization of the member that has a role.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `organizationId`: The unique numeric ID for identifying the organization where the role is being played.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * @return A collection of role assignments.
   */
  getRoleAssignments(params: RoleAssignmentsService.GetRoleAssignmentsParams): __Observable<{count?: number, items?: Array<any>}> {
    return this.getRoleAssignmentsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<any>})
    );
  }

  /**
   * Create a role assignment.
   * @param body Request body.
   */
  RoleAssignmentCreateRoleAssignmentResponse(body: any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/role-assignments`,
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
   * Create a role assignment.
   * @param body Request body.
   */
  RoleAssignmentCreateRoleAssignment(body: any): __Observable<null> {
    return this.RoleAssignmentCreateRoleAssignmentResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a role assignment.
   * @param params The `RoleAssignmentsService.GetRoleAssignmentByIdParams` containing the following parameters:
   *
   * - `memberId`: The unique numeric ID for identifying the user or organization of the member that has a role.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `organizationId`: The unique numeric ID for identifying the organization where the role is being played.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * @return The role assignment.
   */
  getRoleAssignmentByIdResponse(params: RoleAssignmentsService.GetRoleAssignmentByIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/role-assignments/memberId:${params.memberId},roleId:${params.roleId},organizationId:${params.organizationId}`,
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
   * Get a role assignment.
   * @param params The `RoleAssignmentsService.GetRoleAssignmentByIdParams` containing the following parameters:
   *
   * - `memberId`: The unique numeric ID for identifying the user or organization of the member that has a role.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   *
   * - `organizationId`: The unique numeric ID for identifying the organization where the role is being played.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * @return The role assignment.
   */
  getRoleAssignmentById(params: RoleAssignmentsService.GetRoleAssignmentByIdParams): __Observable<any> {
    return this.getRoleAssignmentByIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Delete a role assignment.
   * @param params The `RoleAssignmentsService.RoleAssignmentDeleteRoleAssignmentParams` containing the following parameters:
   *
   * - `memberId`: The unique numeric ID for identifying the user or organization of the member that has a role.
   *
   * - `organizationId`: The unique numeric ID for identifying the organization where the role is being played.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   */
  RoleAssignmentDeleteRoleAssignmentResponse(params: RoleAssignmentsService.RoleAssignmentDeleteRoleAssignmentParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/role-assignments/memberId:${params.memberId},roleId:${params.roleId},organizationId:${params.organizationId}`,
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
   * Delete a role assignment.
   * @param params The `RoleAssignmentsService.RoleAssignmentDeleteRoleAssignmentParams` containing the following parameters:
   *
   * - `memberId`: The unique numeric ID for identifying the user or organization of the member that has a role.
   *
   * - `organizationId`: The unique numeric ID for identifying the organization where the role is being played.
   *
   * - `roleId`: The unique numeric ID for identifying the role.
   */
  RoleAssignmentDeleteRoleAssignment(params: RoleAssignmentsService.RoleAssignmentDeleteRoleAssignmentParams): __Observable<null> {
    return this.RoleAssignmentDeleteRoleAssignmentResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RoleAssignmentsService {

  /**
   * Parameters for getRoleAssignments
   */
  export interface GetRoleAssignmentsParams {

    /**
     * The unique numeric ID for identifying the user or organization of the member that has a role.
     */
    memberId?: number;

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId?: number;

    /**
     * The unique numeric ID for identifying the organization where the role is being played.
     */
    organizationId?: number;

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
  }

  /**
   * Parameters for getRoleAssignmentById
   */
  export interface GetRoleAssignmentByIdParams {

    /**
     * The unique numeric ID for identifying the user or organization of the member that has a role.
     */
    memberId: number;

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId: number;

    /**
     * The unique numeric ID for identifying the organization where the role is being played.
     */
    organizationId: number;

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: string;

    /**
     * The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
     */
    expand?: string;
  }

  /**
   * Parameters for RoleAssignmentDeleteRoleAssignment
   */
  export interface RoleAssignmentDeleteRoleAssignmentParams {

    /**
     * The unique numeric ID for identifying the user or organization of the member that has a role.
     */
    memberId: number;

    /**
     * The unique numeric ID for identifying the organization where the role is being played.
     */
    organizationId: number;

    /**
     * The unique numeric ID for identifying the role.
     */
    roleId: number;
  }
}

export { RoleAssignmentsService }
