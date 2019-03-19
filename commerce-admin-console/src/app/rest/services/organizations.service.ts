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
class OrganizationsService extends __BaseService {
  static readonly OrganizationsCreateOrganizationPath = '/rest/admin/v2/organizations';
  static readonly OrganizationsUpdateOrganizationPath = '/rest/admin/v2/organizations/{id}';
  static readonly OrganizationsFindByOrganizationIdPath = '/rest/admin/v2/organizations/{id}';
  static readonly OrganizationLockPath = '/rest/admin/v2/organizations/{id}/lock';
  static readonly OrganizationUnlockPath = '/rest/admin/v2/organizations/{id}/unlock';
  static readonly OrganizationGetManageableOrganizationsPath = '/rest/admin/v2/organizations/manageable';
  static readonly OrganizationsFindSiteAttributesByOrganizationIdPath = '/rest/admin/v2/organizations/{id}/site-attributes';
  static readonly OrganizationsCreateOrganizationSiteAttributePath = '/rest/admin/v2/organizations/{id}/site-attributes';
  static readonly OrganizationsFindSiteAttributeByOrganizationIdPath = '/rest/admin/v2/organizations/{id}/site-attributes/{name}';
  static readonly OrganizationsUpdateOrganizationSiteAttributePath = '/rest/admin/v2/organizations/{id}/site-attributes/{name}';
  static readonly OrganizationsDeleteOrganizationSiteAttributePath = '/rest/admin/v2/organizations/{id}/site-attributes/{name}';
  static readonly OrganizationsFindStoreMemberAttributesByOrganizationIdPath = '/rest/admin/v2/organizations/{id}/store-attributes';
  static readonly OrganizationsCreateOrganizationStoreMemberAttributePath = '/rest/admin/v2/organizations/{id}/store-attributes';
  static readonly OrganizationsFindStoreMemberAttributeByOrganizationIdPath = '/rest/admin/v2/organizations/{id}/store-attributes/storeId:{storeId},name:{name}';
  static readonly OrganizationsUpdateOrganizationStoreMemberAttributePath = '/rest/admin/v2/organizations/{id}/store-attributes/storeId:{storeId},name:{name}';
  static readonly OrganizationsDeleteOrganizationStoreMemberAttributePath = '/rest/admin/v2/organizations/{id}/store-attributes/storeId:{storeId},name:{name}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Create an organization.
   * @param body Request body.
   */
  OrganizationsCreateOrganizationResponse(body: any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/organizations`,
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
   * Create an organization.
   * @param body Request body.
   */
  OrganizationsCreateOrganization(body: any): __Observable<null> {
    return this.OrganizationsCreateOrganizationResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update an organization.
   * @param params The `OrganizationsService.OrganizationsUpdateOrganizationParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `body`: Request body.
   */
  OrganizationsUpdateOrganizationResponse(params: OrganizationsService.OrganizationsUpdateOrganizationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}`,
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
   * Update an organization.
   * @param params The `OrganizationsService.OrganizationsUpdateOrganizationParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `body`: Request body.
   */
  OrganizationsUpdateOrganization(params: OrganizationsService.OrganizationsUpdateOrganizationParams): __Observable<null> {
    return this.OrganizationsUpdateOrganizationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get an organization by ID.
   * @param id The unique numeric ID for identifying the organization.
   * @return The requested completed successfully.
   */
  OrganizationsFindByOrganizationIdResponse(id: number): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/organizations/${id}`,
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
   * Get an organization by ID.
   * @param id The unique numeric ID for identifying the organization.
   * @return The requested completed successfully.
   */
  OrganizationsFindByOrganizationId(id: number): __Observable<any> {
    return this.OrganizationsFindByOrganizationIdResponse(id).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Lock an organization. When locked the organization's status is -1.
   * @param id The unique numeric ID for identifying the organization.
   */
  OrganizationLockResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/organizations/${id}/lock`,
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
   * Lock an organization. When locked the organization's status is -1.
   * @param id The unique numeric ID for identifying the organization.
   */
  OrganizationLock(id: number): __Observable<null> {
    return this.OrganizationLockResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Unlock an organization. When unlocked the organization's status is 0.
   * @param id The unique numeric ID for identifying the organization.
   */
  OrganizationUnlockResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/organizations/${id}/unlock`,
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
   * Unlock an organization. When unlocked the organization's status is 0.
   * @param id The unique numeric ID for identifying the organization.
   */
  OrganizationUnlock(id: number): __Observable<null> {
    return this.OrganizationUnlockResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a collection of organizations the currently logged in administrator user can manage.
   * @param params The `OrganizationsService.OrganizationGetManageableOrganizationsParams` containing the following parameters:
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `organizationName`: The organization name.
   *
   * - `parentOrganizationName`: The parent organization name.
   *
   * - `sort`: The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
   *
   * @return The request completed successfully.
   */
  OrganizationGetManageableOrganizationsResponse(params: OrganizationsService.OrganizationGetManageableOrganizationsParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.organizationName != null) __params = __params.set('organizationName', params.organizationName.toString());
    if (params.parentOrganizationName != null) __params = __params.set('parentOrganizationName', params.parentOrganizationName.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/organizations/manageable`,
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
   * Get a collection of organizations the currently logged in administrator user can manage.
   * @param params The `OrganizationsService.OrganizationGetManageableOrganizationsParams` containing the following parameters:
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `organizationName`: The organization name.
   *
   * - `parentOrganizationName`: The parent organization name.
   *
   * - `sort`: The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
   *
   * @return The request completed successfully.
   */
  OrganizationGetManageableOrganizations(params: OrganizationsService.OrganizationGetManageableOrganizationsParams): __Observable<any> {
    return this.OrganizationGetManageableOrganizationsResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Get an organization's site-level, store-independent attributes.
   * @param params The `OrganizationsService.OrganizationsFindSiteAttributesByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindSiteAttributesByOrganizationIdResponse(params: OrganizationsService.OrganizationsFindSiteAttributesByOrganizationIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/site-attributes`,
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
   * Get an organization's site-level, store-independent attributes.
   * @param params The `OrganizationsService.OrganizationsFindSiteAttributesByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindSiteAttributesByOrganizationId(params: OrganizationsService.OrganizationsFindSiteAttributesByOrganizationIdParams): __Observable<any> {
    return this.OrganizationsFindSiteAttributesByOrganizationIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Create an organization site-level attribute.
   * @param params The `OrganizationsService.OrganizationsCreateOrganizationSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `body`: Request body.
   */
  OrganizationsCreateOrganizationSiteAttributeResponse(params: OrganizationsService.OrganizationsCreateOrganizationSiteAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/site-attributes`,
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
   * Create an organization site-level attribute.
   * @param params The `OrganizationsService.OrganizationsCreateOrganizationSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `body`: Request body.
   */
  OrganizationsCreateOrganizationSiteAttribute(params: OrganizationsService.OrganizationsCreateOrganizationSiteAttributeParams): __Observable<null> {
    return this.OrganizationsCreateOrganizationSiteAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get an organization's site-level, store-independent attribute by organization ID and attribute name.
   * @param params The `OrganizationsService.OrganizationsFindSiteAttributeByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindSiteAttributeByOrganizationIdResponse(params: OrganizationsService.OrganizationsFindSiteAttributeByOrganizationIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/site-attributes/${params.name}`,
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
   * Get an organization's site-level, store-independent attribute by organization ID and attribute name.
   * @param params The `OrganizationsService.OrganizationsFindSiteAttributeByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindSiteAttributeByOrganizationId(params: OrganizationsService.OrganizationsFindSiteAttributeByOrganizationIdParams): __Observable<any> {
    return this.OrganizationsFindSiteAttributeByOrganizationIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Update an organization's site-level attributes.
   * @param params The `OrganizationsService.OrganizationsUpdateOrganizationSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `name`: The name of the attribute to be updated.
   *
   * - `body`: Request body.
   */
  OrganizationsUpdateOrganizationSiteAttributeResponse(params: OrganizationsService.OrganizationsUpdateOrganizationSiteAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/site-attributes/${params.name}`,
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
   * Update an organization's site-level attributes.
   * @param params The `OrganizationsService.OrganizationsUpdateOrganizationSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `name`: The name of the attribute to be updated.
   *
   * - `body`: Request body.
   */
  OrganizationsUpdateOrganizationSiteAttribute(params: OrganizationsService.OrganizationsUpdateOrganizationSiteAttributeParams): __Observable<null> {
    return this.OrganizationsUpdateOrganizationSiteAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Delete a site-level attribute of an organization.
   * @param params The `OrganizationsService.OrganizationsDeleteOrganizationSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `name`: The name of the attribute to be deleted.
   */
  OrganizationsDeleteOrganizationSiteAttributeResponse(params: OrganizationsService.OrganizationsDeleteOrganizationSiteAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/site-attributes/${params.name}`,
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
   * Delete a site-level attribute of an organization.
   * @param params The `OrganizationsService.OrganizationsDeleteOrganizationSiteAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `name`: The name of the attribute to be deleted.
   */
  OrganizationsDeleteOrganizationSiteAttribute(params: OrganizationsService.OrganizationsDeleteOrganizationSiteAttributeParams): __Observable<null> {
    return this.OrganizationsDeleteOrganizationSiteAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get an organization's store-specific attributes.
   * @param params The `OrganizationsService.OrganizationsFindStoreMemberAttributesByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindStoreMemberAttributesByOrganizationIdResponse(params: OrganizationsService.OrganizationsFindStoreMemberAttributesByOrganizationIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/store-attributes`,
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
   * Get an organization's store-specific attributes.
   * @param params The `OrganizationsService.OrganizationsFindStoreMemberAttributesByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindStoreMemberAttributesByOrganizationId(params: OrganizationsService.OrganizationsFindStoreMemberAttributesByOrganizationIdParams): __Observable<any> {
    return this.OrganizationsFindStoreMemberAttributesByOrganizationIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Create a store-specific organization attribute.
   * @param params The `OrganizationsService.OrganizationsCreateOrganizationStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `body`: Request body.
   */
  OrganizationsCreateOrganizationStoreMemberAttributeResponse(params: OrganizationsService.OrganizationsCreateOrganizationStoreMemberAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/store-attributes`,
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
   * Create a store-specific organization attribute.
   * @param params The `OrganizationsService.OrganizationsCreateOrganizationStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `body`: Request body.
   */
  OrganizationsCreateOrganizationStoreMemberAttribute(params: OrganizationsService.OrganizationsCreateOrganizationStoreMemberAttributeParams): __Observable<null> {
    return this.OrganizationsCreateOrganizationStoreMemberAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get an organization's store-specific attribute by organization ID, store ID and attribute name.
   * @param params The `OrganizationsService.OrganizationsFindStoreMemberAttributeByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindStoreMemberAttributeByOrganizationIdResponse(params: OrganizationsService.OrganizationsFindStoreMemberAttributeByOrganizationIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/store-attributes/storeId:${params.storeId},name:${params.name}`,
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
   * Get an organization's store-specific attribute by organization ID, store ID and attribute name.
   * @param params The `OrganizationsService.OrganizationsFindStoreMemberAttributeByOrganizationIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to use as the search term.
   *
   * @return The requested completed successfully.
   */
  OrganizationsFindStoreMemberAttributeByOrganizationId(params: OrganizationsService.OrganizationsFindStoreMemberAttributeByOrganizationIdParams): __Observable<any> {
    return this.OrganizationsFindStoreMemberAttributeByOrganizationIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Update an organization's store-specific attributes.
   * @param params The `OrganizationsService.OrganizationsUpdateOrganizationStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of this attribute.
   *
   * - `body`: Request body.
   */
  OrganizationsUpdateOrganizationStoreMemberAttributeResponse(params: OrganizationsService.OrganizationsUpdateOrganizationStoreMemberAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/store-attributes/storeId:${params.storeId},name:${params.name}`,
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
   * Update an organization's store-specific attributes.
   * @param params The `OrganizationsService.OrganizationsUpdateOrganizationStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of this attribute.
   *
   * - `body`: Request body.
   */
  OrganizationsUpdateOrganizationStoreMemberAttribute(params: OrganizationsService.OrganizationsUpdateOrganizationStoreMemberAttributeParams): __Observable<null> {
    return this.OrganizationsUpdateOrganizationStoreMemberAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Delete a store-specific attribute of an organization.
   * @param params The `OrganizationsService.OrganizationsDeleteOrganizationStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to be deleted.
   */
  OrganizationsDeleteOrganizationStoreMemberAttributeResponse(params: OrganizationsService.OrganizationsDeleteOrganizationStoreMemberAttributeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/organizations/${params.id}/store-attributes/storeId:${params.storeId},name:${params.name}`,
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
   * Delete a store-specific attribute of an organization.
   * @param params The `OrganizationsService.OrganizationsDeleteOrganizationStoreMemberAttributeParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the organization.
   *
   * - `storeId`: The unique numeric ID of the store where the attribute applies.
   *
   * - `name`: The name of the attribute to be deleted.
   */
  OrganizationsDeleteOrganizationStoreMemberAttribute(params: OrganizationsService.OrganizationsDeleteOrganizationStoreMemberAttributeParams): __Observable<null> {
    return this.OrganizationsDeleteOrganizationStoreMemberAttributeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module OrganizationsService {

  /**
   * Parameters for OrganizationsUpdateOrganization
   */
  export interface OrganizationsUpdateOrganizationParams {

    /**
     * The unique numeric ID for identifying the organization.
     */
    id: number;

    /**
     * Request body.
     */
    body?: any;
  }

  /**
   * Parameters for OrganizationGetManageableOrganizations
   */
  export interface OrganizationGetManageableOrganizationsParams {

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;

    /**
     * The organization name.
     */
    organizationName?: string;

    /**
     * The parent organization name.
     */
    parentOrganizationName?: string;

    /**
     * The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for OrganizationsFindSiteAttributesByOrganizationId
   */
  export interface OrganizationsFindSiteAttributesByOrganizationIdParams {

    /**
     * The unique numeric ID for identifying the organization.
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
   * Parameters for OrganizationsCreateOrganizationSiteAttribute
   */
  export interface OrganizationsCreateOrganizationSiteAttributeParams {

    /**
     * The unique numeric ID for identifying the organization.
     */
    id: number;

    /**
     * Request body.
     */
    body: any;
  }

  /**
   * Parameters for OrganizationsFindSiteAttributeByOrganizationId
   */
  export interface OrganizationsFindSiteAttributeByOrganizationIdParams {

    /**
     * The unique numeric ID for identifying the organization.
     */
    id: number;

    /**
     * The name of the attribute to use as the search term.
     */
    name: string;
  }

  /**
   * Parameters for OrganizationsUpdateOrganizationSiteAttribute
   */
  export interface OrganizationsUpdateOrganizationSiteAttributeParams {

    /**
     * The unique numeric ID for identifying the organization.
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
   * Parameters for OrganizationsDeleteOrganizationSiteAttribute
   */
  export interface OrganizationsDeleteOrganizationSiteAttributeParams {

    /**
     * The unique numeric ID for identifying the organization.
     */
    id: number;

    /**
     * The name of the attribute to be deleted.
     */
    name: string;
  }

  /**
   * Parameters for OrganizationsFindStoreMemberAttributesByOrganizationId
   */
  export interface OrganizationsFindStoreMemberAttributesByOrganizationIdParams {

    /**
     * The unique numeric ID for identifying the organization.
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
   * Parameters for OrganizationsCreateOrganizationStoreMemberAttribute
   */
  export interface OrganizationsCreateOrganizationStoreMemberAttributeParams {

    /**
     * The unique numeric ID for identifying the organization.
     */
    id: number;

    /**
     * Request body.
     */
    body: any;
  }

  /**
   * Parameters for OrganizationsFindStoreMemberAttributeByOrganizationId
   */
  export interface OrganizationsFindStoreMemberAttributeByOrganizationIdParams {

    /**
     * The unique numeric ID for identifying the organization.
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
   * Parameters for OrganizationsUpdateOrganizationStoreMemberAttribute
   */
  export interface OrganizationsUpdateOrganizationStoreMemberAttributeParams {

    /**
     * The unique numeric ID for identifying the organization.
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
   * Parameters for OrganizationsDeleteOrganizationStoreMemberAttribute
   */
  export interface OrganizationsDeleteOrganizationStoreMemberAttributeParams {

    /**
     * The unique numeric ID for identifying the organization.
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

export { OrganizationsService }
