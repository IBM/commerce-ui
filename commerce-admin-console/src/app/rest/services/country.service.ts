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
class CountryService extends __BaseService {
  static readonly CountryFindCountryStateListPath = '/wcs/resources/store/{storeId}/country/country_state_list';
  static readonly CountryFindCountryStateNamePath = '/wcs/resources/store/{storeId}/country/country_state_name';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets a list of countries or regions with the corresponding states or provinces.
   * @param params The `CountryService.CountryFindCountryStateListParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_countryStateList_Summary.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryFindCountryStateListResponse(params: CountryService.CountryFindCountryStateListParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.countryCode != null) __params = __params.set('countryCode', params.countryCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/country/country_state_list`,
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
   * Gets a list of countries or regions with the corresponding states or provinces.
   * @param params The `CountryService.CountryFindCountryStateListParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_countryStateList_Summary.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryFindCountryStateList(params: CountryService.CountryFindCountryStateListParams): __Observable<any> {
    return this.CountryFindCountryStateListResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Gets the display name of a country and/or a state.
   * @param params The `CountryService.CountryFindCountryStateNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_countryStateName.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * - `stateCode`: The state or province abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryFindCountryStateNameResponse(params: CountryService.CountryFindCountryStateNameParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.countryCode != null) __params = __params.set('countryCode', params.countryCode.toString());
    if (params.stateCode != null) __params = __params.set('stateCode', params.stateCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/country/country_state_name`,
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
   * Gets the display name of a country and/or a state.
   * @param params The `CountryService.CountryFindCountryStateNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_countryStateName.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * - `stateCode`: The state or province abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryFindCountryStateName(params: CountryService.CountryFindCountryStateNameParams): __Observable<any> {
    return this.CountryFindCountryStateNameResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }
}

module CountryService {

  /**
   * Parameters for CountryFindCountryStateList
   */
  export interface CountryFindCountryStateListParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_countryStateList_Summary.
     */
    profileName?: 'IBM_countryStateList_Summary';

    /**
     * The country or region abbreviation code.
     */
    countryCode?: string;
  }

  /**
   * Parameters for CountryFindCountryStateName
   */
  export interface CountryFindCountryStateNameParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_countryStateName.
     */
    profileName?: 'IBM_countryStateName';

    /**
     * The country or region abbreviation code.
     */
    countryCode?: string;

    /**
     * The state or province abbreviation code.
     */
    stateCode?: string;
  }
}

export { CountryService }
