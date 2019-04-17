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
class UsersService extends __BaseService {
  static readonly UsersGetManageableUsersPath = '/rest/admin/v2/users/manageable';
  static readonly UsersFindByUserIdPath = '/rest/admin/v2/users/{id}';
  static readonly UsersUpdateUserPath = '/rest/admin/v2/users/{id}';
  static readonly UsersCreateUserPath = '/rest/admin/v2/users';
  static readonly UsersFindSiteAttributesByUserIdPath = '/rest/admin/v2/users/{id}/site-attributes';
  static readonly UsersCreateUserSiteAttributePath = '/rest/admin/v2/users/{id}/site-attributes';
  static readonly UsersFindSiteAttributeByUserIdPath = '/rest/admin/v2/users/{id}/site-attributes/{name}';
  static readonly UsersUpdateUserSiteAttributePath = '/rest/admin/v2/users/{id}/site-attributes/{name}';
  static readonly UsersDeleteUserSiteAttributePath = '/rest/admin/v2/users/{id}/site-attributes/{name}';
  static readonly UsersFindStoreMemberAttributesByUserIdPath = '/rest/admin/v2/users/{id}/store-attributes';
  static readonly UsersCreateUserStoreMemberAttributePath = '/rest/admin/v2/users/{id}/store-attributes';
  static readonly UsersFindStoreMemberAttributeByUserIdPath = '/rest/admin/v2/users/{id}/store-attributes/storeId:{storeId},name:{name}';
  static readonly UsersUpdateUserStoreMemberAttributePath = '/rest/admin/v2/users/{id}/store-attributes/storeId:{storeId},name:{name}';
  static readonly UsersDeleteUserStoreMemberAttributePath = '/rest/admin/v2/users/{id}/store-attributes/storeId:{storeId},name:{name}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of users the currently logged in administrator user can manage.
   * @param params The `UsersService.UsersGetManageableUsersParams` containing the following parameters:
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `lastName`: Limits search results to only include users whose last name matches the value of this parameter.
   *
   * - `firstName`: Limits search results to only include users whose first name matches the value of this parameter.
   *
   * - `logonId`: Limits search results to only include users whose logon ID matches the value of this parameter.
   *
   * - `sort`: The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
   *
   * @return The request completed successfully.
   */
  UsersGetManageableUsersResponse(params: UsersService.UsersGetManageableUsersParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.lastName != null) __params = __params.set('lastName', params.lastName.toString());
    if (params.firstName != null) __params = __params.set('firstName', params.firstName.toString());
    if (params.logonId != null) __params = __params.set('logonId', params.logonId.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/users/manageable`,
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
   * Get a collection of users the currently logged in administrator user can manage.
   * @param params The `UsersService.UsersGetManageableUsersParams` containing the following parameters:
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `lastName`: Limits search results to only include users whose last name matches the value of this parameter.
   *
   * - `firstName`: Limits search results to only include users whose first name matches the value of this parameter.
   *
   * - `logonId`: Limits search results to only include users whose logon ID matches the value of this parameter.
   *
   * - `sort`: The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
   *
   * @return The request completed successfully.
   */
  UsersGetManageableUsers(params: UsersService.UsersGetManageableUsersParams): __Observable<any> {
    return this.UsersGetManageableUsersResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Get a user by ID.
   * @param id The unique numeric ID for identifying the user.
   * @return The requested completed successfully.
   */
  UsersFindByUserIdResponse(id: number): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/users/${id}`,
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
   * Get a user by ID.
   * @param id The unique numeric ID for identifying the user.
   * @return The requested completed successfully.
   */
  UsersFindByUserId(id: number): __Observable<any> {
    return this.UsersFindByUserIdResponse(id).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Update a user.
   * @param params The `UsersService.UsersUpdateUserParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `body`: Request body.
   */
  UsersUpdateUserResponse(params: UsersService.UsersUpdateUserParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/users/${params.id}`,
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
   * Update a user.
   * @param params The `UsersService.UsersUpdateUserParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `body`: Request body.
   */
  UsersUpdateUser(params: UsersService.UsersUpdateUserParams): __Observable<null> {
    return this.UsersUpdateUserResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Create a user.
   * @param body Request body.
   */
  UsersCreateUserResponse(body: any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/users`,
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
   * Create a user.
   * @param body Request body.
   */
  UsersCreateUser(body: any): __Observable<null> {
    return this.UsersCreateUserResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a user's site-level, store-independent attributes.
   * @param params The `UsersService.UsersFindSiteAttributesByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  UsersFindSiteAttributesByUserIdResponse(params: UsersService.UsersFindSiteAttributesByUserIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/site-attributes`,
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
   * Get a user's site-level, store-independent attributes.
   * @param params The `UsersService.UsersFindSiteAttributesByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  UsersFindSiteAttributesByUserId(params: UsersService.UsersFindSiteAttributesByUserIdParams): __Observable<any> {
    return this.UsersFindSiteAttributesByUserIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Create a user site-level attribute.
   * @param params The `UsersService.UsersCreateUserSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `body`: Request body.
   */
  UsersCreateUserSiteAttributeResponse(params: UsersService.UsersCreateUserSiteAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/site-attributes`,
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
   * Create a user site-level attribute.
   * @param params The `UsersService.UsersCreateUserSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `body`: Request body.
   */
  UsersCreateUserSiteAttribute(params: UsersService.UsersCreateUserSiteAttributeParams): __Observable<null> {
    return this.UsersCreateUserSiteAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a user's site-level, store-independent attribute by user ID and attribute name.
   * @param params The `UsersService.UsersFindSiteAttributeByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  UsersFindSiteAttributeByUserIdResponse(params: UsersService.UsersFindSiteAttributeByUserIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/site-attributes/${params.name}`,
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
   * Get a user's site-level, store-independent attribute by user ID and attribute name.
   * @param params The `UsersService.UsersFindSiteAttributeByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  UsersFindSiteAttributeByUserId(params: UsersService.UsersFindSiteAttributeByUserIdParams): __Observable<any> {
    return this.UsersFindSiteAttributeByUserIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Update a user's site-level attributes. Attribute values are merged at the attribute level, rather than the attribute value level. For example, if an attribute has the following values '[a, b]', after performing an update using values '[c, d, e]', the attribute values would be '[c, d, e]'.
   * @param params The `UsersService.UsersUpdateUserSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `name`: The name of the attribute to be updated.
   *
   * - `body`: Request body.
   */
  UsersUpdateUserSiteAttributeResponse(params: UsersService.UsersUpdateUserSiteAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/site-attributes/${params.name}`,
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
   * Update a user's site-level attributes. Attribute values are merged at the attribute level, rather than the attribute value level. For example, if an attribute has the following values '[a, b]', after performing an update using values '[c, d, e]', the attribute values would be '[c, d, e]'.
   * @param params The `UsersService.UsersUpdateUserSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `name`: The name of the attribute to be updated.
   *
   * - `body`: Request body.
   */
  UsersUpdateUserSiteAttribute(params: UsersService.UsersUpdateUserSiteAttributeParams): __Observable<null> {
    return this.UsersUpdateUserSiteAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Delete a site-level attribute of a user.
   * @param params The `UsersService.UsersDeleteUserSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `name`: The name of the attribute to be deleted.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   */
  UsersDeleteUserSiteAttributeResponse(params: UsersService.UsersDeleteUserSiteAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/site-attributes/${params.name}`,
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
   * Delete a site-level attribute of a user.
   * @param params The `UsersService.UsersDeleteUserSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `name`: The name of the attribute to be deleted.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   */
  UsersDeleteUserSiteAttribute(params: UsersService.UsersDeleteUserSiteAttributeParams): __Observable<null> {
    return this.UsersDeleteUserSiteAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a user's store-specific attributes.
   * @param params The `UsersService.UsersFindStoreMemberAttributesByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  UsersFindStoreMemberAttributesByUserIdResponse(params: UsersService.UsersFindStoreMemberAttributesByUserIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/store-attributes`,
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
   * Get a user's store-specific attributes.
   * @param params The `UsersService.UsersFindStoreMemberAttributesByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  UsersFindStoreMemberAttributesByUserId(params: UsersService.UsersFindStoreMemberAttributesByUserIdParams): __Observable<any> {
    return this.UsersFindStoreMemberAttributesByUserIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Create a store-specific user attribute.
   * @param params The `UsersService.UsersCreateUserStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `body`: Request body.
   */
  UsersCreateUserStoreMemberAttributeResponse(params: UsersService.UsersCreateUserStoreMemberAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/store-attributes`,
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
   * Create a store-specific user attribute.
   * @param params The `UsersService.UsersCreateUserStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `body`: Request body.
   */
  UsersCreateUserStoreMemberAttribute(params: UsersService.UsersCreateUserStoreMemberAttributeParams): __Observable<null> {
    return this.UsersCreateUserStoreMemberAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a user's store-specific attribute by user ID, store ID and attribute name.
   * @param params The `UsersService.UsersFindStoreMemberAttributeByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  UsersFindStoreMemberAttributeByUserIdResponse(params: UsersService.UsersFindStoreMemberAttributeByUserIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/store-attributes/storeId:${params.storeId},name:${params.name}`,
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
   * Get a user's store-specific attribute by user ID, store ID and attribute name.
   * @param params The `UsersService.UsersFindStoreMemberAttributeByUserIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  UsersFindStoreMemberAttributeByUserId(params: UsersService.UsersFindStoreMemberAttributeByUserIdParams): __Observable<any> {
    return this.UsersFindStoreMemberAttributeByUserIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Update a user's store-specific attributes. Attribute values are merged at the attribute level, rather than the attribute value level. For example, if an attribute has the following values '[a, b]', after performing an update using values '[c, d, e]', the attribute values would be '[c, d, e]'.
   * @param params The `UsersService.UsersUpdateUserStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of this attribute.
   *
   * - `body`: Request body.
   */
  UsersUpdateUserStoreMemberAttributeResponse(params: UsersService.UsersUpdateUserStoreMemberAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/store-attributes/storeId:${params.storeId},name:${params.name}`,
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
   * Update a user's store-specific attributes. Attribute values are merged at the attribute level, rather than the attribute value level. For example, if an attribute has the following values '[a, b]', after performing an update using values '[c, d, e]', the attribute values would be '[c, d, e]'.
   * @param params The `UsersService.UsersUpdateUserStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of this attribute.
   *
   * - `body`: Request body.
   */
  UsersUpdateUserStoreMemberAttribute(params: UsersService.UsersUpdateUserStoreMemberAttributeParams): __Observable<null> {
    return this.UsersUpdateUserStoreMemberAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Delete a store-specific attribute of a user.
   * @param params The `UsersService.UsersDeleteUserStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to be deleted.
   */
  UsersDeleteUserStoreMemberAttributeResponse(params: UsersService.UsersDeleteUserStoreMemberAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/users/${params.id}/store-attributes/storeId:${params.storeId},name:${params.name}`,
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
   * Delete a store-specific attribute of a user.
   * @param params The `UsersService.UsersDeleteUserStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the user.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to be deleted.
   */
  UsersDeleteUserStoreMemberAttribute(params: UsersService.UsersDeleteUserStoreMemberAttributeParams): __Observable<null> {
    return this.UsersDeleteUserStoreMemberAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UsersService {

  /**
   * Parameters for UsersGetManageableUsers
   */
  export interface UsersGetManageableUsersParams {

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;

    /**
     * Limits search results to only include users whose last name matches the value of this parameter.
     */
    lastName?: string;

    /**
     * Limits search results to only include users whose first name matches the value of this parameter.
     */
    firstName?: string;

    /**
     * Limits search results to only include users whose logon ID matches the value of this parameter.
     */
    logonId?: string;

    /**
     * The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for UsersUpdateUser
   */
  export interface UsersUpdateUserParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * Request body.
     */
    body?: any;
  }

  /**
   * Parameters for UsersFindSiteAttributesByUserId
   */
  export interface UsersFindSiteAttributesByUserIdParams {

    /**
     * The unique numeric ID for identifying the user.
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
  }

  /**
   * Parameters for UsersCreateUserSiteAttribute
   */
  export interface UsersCreateUserSiteAttributeParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * Request body.
     */
    body: any;
  }

  /**
   * Parameters for UsersFindSiteAttributeByUserId
   */
  export interface UsersFindSiteAttributeByUserIdParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The name of the attribute to use as the search term.
     */
    name: string;
  }

  /**
   * Parameters for UsersUpdateUserSiteAttribute
   */
  export interface UsersUpdateUserSiteAttributeParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The name of the attribute to be updated.
     */
    name: string;

    /**
     * Request body.
     */
    body: any;
  }

  /**
   * Parameters for UsersDeleteUserSiteAttribute
   */
  export interface UsersDeleteUserSiteAttributeParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The name of the attribute to be deleted.
     */
    name: string;

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
   * Parameters for UsersFindStoreMemberAttributesByUserId
   */
  export interface UsersFindStoreMemberAttributesByUserIdParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The unique numeric ID of the store where the attribute applies.
     */
    storeId: number;

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
   * Parameters for UsersCreateUserStoreMemberAttribute
   */
  export interface UsersCreateUserStoreMemberAttributeParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * Request body.
     */
    body: any;
  }

  /**
   * Parameters for UsersFindStoreMemberAttributeByUserId
   */
  export interface UsersFindStoreMemberAttributeByUserIdParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The unique numeric ID of the store where the attribute applies.
     */
    storeId: number;

    /**
     * The name of the attribute to use as the search term.
     */
    name: string;
  }

  /**
   * Parameters for UsersUpdateUserStoreMemberAttribute
   */
  export interface UsersUpdateUserStoreMemberAttributeParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The unique numeric ID of the store where the attribute applies.
     */
    storeId: number;

    /**
     * The name of this attribute.
     */
    name: string;

    /**
     * Request body.
     */
    body: any;
  }

  /**
   * Parameters for UsersDeleteUserStoreMemberAttribute
   */
  export interface UsersDeleteUserStoreMemberAttributeParams {

    /**
     * The unique numeric ID for identifying the user.
     */
    id: number;

    /**
     * The unique numeric ID of the store where the attribute applies.
     */
    storeId: number;

    /**
     * The name of the attribute to be deleted.
     */
    name: string;
  }
}

export { UsersService }
