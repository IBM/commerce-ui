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
class AddressesService extends __BaseService {
  static readonly AddressesGetAddressesPath = '/rest/admin/v2/addresses';
  static readonly AddressesCreateAddressPath = '/rest/admin/v2/addresses';
  static readonly AddressesFindByAddressIdPath = '/rest/admin/v2/addresses/{id}';
  static readonly AddressesDeleteByAddressIdPath = '/rest/admin/v2/addresses/{id}';
  static readonly AddressesUpdateByAddressIdPath = '/rest/admin/v2/addresses/{id}/new-version';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of addresses.
   * @param params The `AddressesService.AddressesGetAddressesParams` containing the following parameters:
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `lastName`: Limits search results to only include users whose last name matches the value of this parameter.
   *
   * - `firstName`: Limits search results to only include users whose first name matches the value of this parameter.
   *
   * - `memberId`: Limits search results to only include users whose member ID matches the value of this parameter.
   *
   * - `sort`: The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
   *
   * @return The request completed successfully.
   */
  AddressesGetAddressesResponse(params: AddressesService.AddressesGetAddressesParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.fields || []).forEach(val => {if (val != null) __params = __params.append('fields', val.toString())});
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.lastName != null) __params = __params.set('lastName', params.lastName.toString());
    if (params.firstName != null) __params = __params.set('firstName', params.firstName.toString());
    if (params.memberId != null) __params = __params.set('memberId', params.memberId.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/addresses`,
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
   * Get a collection of addresses.
   * @param params The `AddressesService.AddressesGetAddressesParams` containing the following parameters:
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `lastName`: Limits search results to only include users whose last name matches the value of this parameter.
   *
   * - `firstName`: Limits search results to only include users whose first name matches the value of this parameter.
   *
   * - `memberId`: Limits search results to only include users whose member ID matches the value of this parameter.
   *
   * - `sort`: The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
   *
   * @return The request completed successfully.
   */
  AddressesGetAddresses(params: AddressesService.AddressesGetAddressesParams): __Observable<any> {
    return this.AddressesGetAddressesResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Create an address.
   * @param body Request body. The "id" field will be generated and it should not be part of the request body. The "selfAddress" and "status" fields are managed and it cannot be specified.
   */
  AddressesCreateAddressResponse(body: any): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/addresses`,
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
   * Create an address.
   * @param body Request body. The "id" field will be generated and it should not be part of the request body. The "selfAddress" and "status" fields are managed and it cannot be specified.
   */
  AddressesCreateAddress(body: any): __Observable<null> {
    return this.AddressesCreateAddressResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get an address by ID.
   * @param params The `AddressesService.AddressesFindByAddressIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the address.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * @return The requested completed successfully.
   */
  AddressesFindByAddressIdResponse(params: AddressesService.AddressesFindByAddressIdParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.fields || []).forEach(val => {if (val != null) __params = __params.append('fields', val.toString())});
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/addresses/${params.id}`,
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
   * Get an address by ID.
   * @param params The `AddressesService.AddressesFindByAddressIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the address.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * @return The requested completed successfully.
   */
  AddressesFindByAddressId(params: AddressesService.AddressesFindByAddressIdParams): __Observable<any> {
    return this.AddressesFindByAddressIdResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Delete an address  by ID.
   * @param id The unique numeric ID for identifying the address.
   */
  AddressesDeleteByAddressIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/addresses/${id}`,
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
   * Delete an address  by ID.
   * @param id The unique numeric ID for identifying the address.
   */
  AddressesDeleteByAddressId(id: number): __Observable<null> {
    return this.AddressesDeleteByAddressIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates an address by creating a new updated version. After the update, the new address will have status "P" (permanent) and the old address will have status "T" (historical).
   * @param params The `AddressesService.AddressesUpdateByAddressIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the address.
   *
   * - `body`: Request body. The "selfAddress" and "status" fields are managed and it cannot be specified.
   */
  AddressesUpdateByAddressIdResponse(params: AddressesService.AddressesUpdateByAddressIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/addresses/${params.id}/new-version`,
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
   * Updates an address by creating a new updated version. After the update, the new address will have status "P" (permanent) and the old address will have status "T" (historical).
   * @param params The `AddressesService.AddressesUpdateByAddressIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the address.
   *
   * - `body`: Request body. The "selfAddress" and "status" fields are managed and it cannot be specified.
   */
  AddressesUpdateByAddressId(params: AddressesService.AddressesUpdateByAddressIdParams): __Observable<null> {
    return this.AddressesUpdateByAddressIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AddressesService {

  /**
   * Parameters for AddressesGetAddresses
   */
  export interface AddressesGetAddressesParams {

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: Array<string>;

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
     * Limits search results to only include users whose member ID matches the value of this parameter.
     */
    memberId?: string;

    /**
     * The comma-separated set of properties that control the order of the listed items. Properties can be prefixed by either (-) to sort in descending order, or (+) to sort in ascending order. By default, properties are sorted in ascending order. For example, sort=name,-id will order the items first based on the name value in ascending order, and then by their ID value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for AddressesFindByAddressId
   */
  export interface AddressesFindByAddressIdParams {

    /**
     * The unique numeric ID for identifying the address.
     */
    id: number;

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: Array<string>;
  }

  /**
   * Parameters for AddressesUpdateByAddressId
   */
  export interface AddressesUpdateByAddressIdParams {

    /**
     * The unique numeric ID for identifying the address.
     */
    id: number;

    /**
     * Request body. The "selfAddress" and "status" fields are managed and it cannot be specified.
     */
    body: any;
  }
}

export { AddressesService }
