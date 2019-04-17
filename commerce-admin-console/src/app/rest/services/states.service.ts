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
class StatesService extends __BaseService {
  static readonly getStatesPath = '/rest/admin/v2/states';
  static readonly getStateByIdPath = '/rest/admin/v2/states/stateAbbr:{stateAbbr},languageId:{languageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of states and provinces.
   * @param params The `StatesService.GetStatesParams` containing the following parameters:
   *
   * - `stateAbbr`: The unique abbreviation for identifying the state or province.
   *
   * - `languageId`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `name`: The name of the state or province.
   *
   * - `countryAbbr`: The country or region abbreviation code for the state or province.
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
   * @return A collection of states and provinces.
   */
  getStatesResponse(params: StatesService.GetStatesParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.stateAbbr != null) __params = __params.set('stateAbbr', params.stateAbbr.toString());
    if (params.languageId != null) __params = __params.set('languageId', params.languageId.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.countryAbbr != null) __params = __params.set('countryAbbr', params.countryAbbr.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/states`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}>}>;
      })
    );
  }

  /**
   * Get a collection of states and provinces.
   * @param params The `StatesService.GetStatesParams` containing the following parameters:
   *
   * - `stateAbbr`: The unique abbreviation for identifying the state or province.
   *
   * - `languageId`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `name`: The name of the state or province.
   *
   * - `countryAbbr`: The country or region abbreviation code for the state or province.
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
   * @return A collection of states and provinces.
   */
  getStates(params: StatesService.GetStatesParams): __Observable<{count?: number, items?: Array<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}>}> {
    return this.getStatesResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}>})
    );
  }

  /**
   * Get a state or province by ID.
   * @param params The `StatesService.GetStateByIdParams` containing the following parameters:
   *
   * - `stateAbbr`: The unique abbreviation for identifying the state or province.
   *
   * - `languageId`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The state or province of a user or organization address.
   */
  getStateByIdResponse(params: StatesService.GetStateByIdParams): __Observable<__StrictHttpResponse<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/states/stateAbbr:${params.stateAbbr},languageId:${params.languageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}>;
      })
    );
  }

  /**
   * Get a state or province by ID.
   * @param params The `StatesService.GetStateByIdParams` containing the following parameters:
   *
   * - `stateAbbr`: The unique abbreviation for identifying the state or province.
   *
   * - `languageId`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The state or province of a user or organization address.
   */
  getStateById(params: StatesService.GetStateByIdParams): __Observable<{stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string}> {
    return this.getStateByIdResponse(params).pipe(
      __map(_r => _r.body as {stateAbbr?: string, languageId?: number, name?: string, countryAbbr?: string})
    );
  }
}

module StatesService {

  /**
   * Parameters for getStates
   */
  export interface GetStatesParams {

    /**
     * The unique abbreviation for identifying the state or province.
     */
    stateAbbr?: string;

    /**
     * The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    languageId?: number;

    /**
     * The name of the state or province.
     */
    name?: string;

    /**
     * The country or region abbreviation code for the state or province.
     */
    countryAbbr?: string;

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
   * Parameters for getStateById
   */
  export interface GetStateByIdParams {

    /**
     * The unique abbreviation for identifying the state or province.
     */
    stateAbbr: string;

    /**
     * The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
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
}

export { StatesService }
